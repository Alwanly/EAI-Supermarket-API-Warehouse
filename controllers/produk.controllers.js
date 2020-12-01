"use strict";

const response = require('../config/response');
const conn = require('../config/connection');

const messageSuccess = "Success";
const messageEmpty = "Empty";
const messageError = "Server Error";

let dataResponseProduk = "";
let dataProduk = [] ; 

const formatDate = (date)=>{
    // let newDate = (new Date(date).toISOString().split('T'))[0];
    return newDate = date;
}

const formatDateTimestamp = (date) => {
    // let newDate = new Date(date).toISOString().replace(/T/, ' ').replace(/\..+/, '');
    return newDate = date;
}

const Produk = ((element)=>{  

    const data = {
        id_produk:element.id_produk,
        nama_produk:element.nama_produk,
        kategori:{
            id_kategori:element.id_kategori,
            kode_kategori:element.kode_kategori,
            nama_kategori:element.nama_kategori
        },
        deskripsi_produk:element.deskripsi_produk,
        merk_produk:element.merk_produk,
        tgl_produksi:formatDate(element.tgl_produksi),
        tgl_kadaluarsa:formatDate(element.tgl_produksi),
        created_at:formatDateTimestamp(element.created_at),
        updated_at:formatDateTimestamp(element.updated_at)
    }   
    return data
})


exports.produkAll = ((req,res)=>{
    conn.query('SELECT * FROM produk INNER JOIN kategori ON produk.kategori_id = kategori.id',
    (err,rows,fields)=>{
        if(err){console.log(err); response.error(messageError,res);};     
        dataResponseProduk = rows;       
        dataProduk = [];                    
        dataResponseProduk.forEach(element => {
            const data = Produk(element);
            dataProduk.push(data);
        });
        if(dataProduk.length > 0) {response.success(messageSuccess,dataProduk,res)}
        else {response.success(messageEmpty,dataProduk,res)}
    });
});


exports.produkByKategori =((req,res)=>{
    const kategori = req.params.kategori;
    conn.query('SELECT * FROM produk INNER JOIN kategori ON produk.kategori_id = kategori.id WHERE kategori.kode_kategori = ?',
    [kategori],
    (err,rows,fields)=>{
        if(err) {response.error(res)};        
        dataResponseProduk = rows;   
        dataProduk = [];                          
        dataResponseProduk.forEach(element => {         
            const data = Produk(element);
            dataProduk.push(data);
        });
        if(dataProduk.length > 0) {response.success(messageSuccess,dataProduk,res)}
        else {response.success(messageEmpty,dataProduk,res)}
    });
});

exports.produkById =((req,res)=>{
    const id= req.params.id;
    conn.query('SELECT * FROM produk RIGHT JOIN kategori ON produk.kategori_id = kategori.id WHERE produk.id_produk = ?',
    [id],
    (err,rows,fields)=>{
        if(err) response.error(messageError,res);
        dataResponseProduk = rows;    
        dataProduk = [];                         
        dataResponseProduk.forEach(element => {
            const produk = Produk(element);
            dataProduk.push(produk);
        });
        if(dataProduk.length > 0) {response.success(messageSuccess,dataProduk,res)}
        else {response.success(messageEmpty,dataProduk,res)}
    });
});

exports.createProduk = ((req,res)=>{
    const data = Produk(req.body);
    console.log(data);    
    conn.query("INSERT INTO produk (kategori_id,nama_produk,deskripsi_produk,merk_produk,tgl_produksi,tgl_kadaluarsa)VALUES (?,?,?,?,?,?)",
    [data.kategori.id_kategori,data.nama_produk,data.deskripsi_produk,data.merk_produk,data.tgl_produksi,data.tgl_kadaluarsa],
    (err,rows,fields)=>{
        if(err) {
            console.log(err);
            response.error(messageError,res)
        };         
        data.id_produk = rows.insertId;                       
        response.success(messageSuccess,data,res);
    });
});

exports.deleteProduk = ((req,res)=>{
    const data = Produk(req.params);    
    conn.query("DELETE FROM produk WHERE id_produk = ?",
    [data.id_produk],
    (err,rows,fields)=>{
        if(err){
            console.log(err);
            response.error(res)
        }
        response.success(messageSuccess,data,res);        
    });
});

exports.updateProduk = ((req,res)=>{   
    const idProduk = req.params.id; 
    const data = Produk(req.body);            
    conn.query("UPDATE produk set kategori_id = ?, nama_produk=?,deskripsi_produk=?,merk_produk=?,tgl_produksi=?,tgl_kadaluarsa=? WHERE id_produk = ?",
    [data.kategori.id_kategori,data.nama_produk,data.deskripsi_produk,data.merk_produk,data.tgl_produksi,data.tgl_kadaluarsa,idProduk],
    (err,rows,fields)=>{
        if(err) {
            console.log(err);
            response.error(res);
        }   
        data.id_produk = idProduk;       
        response.success(messageSuccess,data,res);
    });
});