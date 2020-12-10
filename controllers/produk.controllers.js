"use strict";

const response = require('../config/response');
const conn = require('../config/connection');

let messageSuccess = "Success";
let messageEmpty = "Empty";
let messageFailed = "Failed"
let messageError = "Server Error";

let dataResponseProduk = "";
let dataProduk = [] ; 


const Produk = ((element)=>{  
    const data = {
        id_produk:element.id_produk,
        kode_produk:element.kode_produk,
        nama_produk:element.nama_produk,
        kategori:{
            id_kategori:element.id_kategori,
            kode_kategori:element.kode_kategori,
            nama_kategori:element.nama_kategori
        },        
        deskripsi_produk:element.deskripsi_produk,
        merk_produk:element.merk_produk,
        tgl_produksi:element.tgl_produksi,
        tgl_kadaluarsa:element.tgl_kadaluarsa,
        created_at:element.created_at,
        updated_at:element.updated_at
    }   
    return data
})


exports.produkAll = ((req,res)=>{
    conn.query('SELECT * FROM produk INNER JOIN kategori ON produk.kategori_id = kategori.id',
    (err,rows)=>{
        try {             
            dataResponseProduk = rows;       
            dataProduk = [];                    
            dataResponseProduk.forEach(element => {
                const data = Produk(element);
                dataProduk.push(data);
            });
            if(dataProduk.length > 0) {response.success(messageSuccess,dataProduk,res)}
            else {response.success(messageEmpty,dataProduk,res)}
        } catch (error) {
            console.log(err); 
            response.error(messageError,res);                
        }       
    });
});


exports.produkByKategori =((req,res)=>{
    const kategori = req.params.kategori;
    conn.query('SELECT * FROM produk INNER JOIN kategori ON produk.kategori_id = kategori.id WHERE kategori.kode_kategori = ?',
    [kategori],
    (err,rows)=>{
        try {            
            dataResponseProduk = rows;   
            dataProduk = [];                          
            dataResponseProduk.forEach(element => {         
                const data = Produk(element);
                dataProduk.push(data);
            });
            if(dataProduk.length > 0) {response.success(messageSuccess,dataProduk,res)}
            else {response.success(messageEmpty,dataProduk,res)}        
        } catch (error) {
            response.error(messageError,res);
        }        
    });
});

exports.produkById =((req,res)=>{
    const id= req.params.id;
    conn.query('SELECT * FROM produk RIGHT JOIN kategori ON produk.kategori_id = kategori.id WHERE produk.id_produk = ?',
    [id],
    (err,rows)=>{
        try {            
            dataResponseProduk = rows;    
            dataProduk = [];                         
            dataResponseProduk.forEach(element => {
                const produk = Produk(element);
                dataProduk.push(produk);
            });
            if(dataProduk.length > 0) {response.success(messageSuccess,dataProduk,res)}
            else {response.success(messageEmpty,dataProduk,res)}            
        } catch (error) {
            response.error(messageError,res)        
        }       
    });
});

exports.createProduk = ((req,res)=>{
    const data = Produk(req.body);    
    conn.query("INSERT INTO produk (kode_produk,kategori_id,nama_produk,deskripsi_produk,merk_produk,tgl_produksi,tgl_kadaluarsa)VALUES (?,?,?,?,?,?,?)",
    [data.kode_produk,data.kategori.id_kategori,data.nama_produk,data.deskripsi_produk,data.merk_produk,data.tgl_produksi,data.tgl_kadaluarsa],
    (err,result)=>{
        try {                        
            data.id_produk = result.insertId;                       
            response.create(messageSuccess,data,res);            
        } catch (error) {                                        
            response.error(messageError,res)            
        }
    });
});

exports.deleteProduk = ((req,res)=>{
    const idProduk = req.params.id;     
    conn.query("DELETE FROM produk WHERE id_produk =?",
    [idProduk],
    (err,result)=>{
        try {  
            console.log(result);
            if(result == undefined) response.failed(messageFailed,res);             
            else response.success(messageSuccess,{'id_produk':idProduk},res);
        } catch (error) {
            console.log(err);
            messageError = (err.sqlMessage ? err.sqlMessage : "");
            response.error(messageError,res);
        }              
    });
});

exports.updateProduk = ((req,res)=>{   
    const idProduk = req.params.id; 
    const data = Produk(req.body);            
    conn.query("UPDATE produk set kode_produk=?, kategori_id = ?, nama_produk=?,deskripsi_produk=?,merk_produk=?,tgl_produksi=?,tgl_kadaluarsa=? WHERE id_produk = ?",
    [data.kode_produk, data.kategori.id_kategori, data.nama_produk, data.deskripsi_produk, data.merk_produk, data.tgl_produksi, data.tgl_kadaluarsa, idProduk],
    (err,result)=>{
        try {            
            data.id_produk = idProduk; 
            if(result.affectedRows == 0) response.failed(messageFailed,"",res);      
            else response.success(messageSuccess,data,res);            
        } catch (error) {            
            console.log(err);
            response.error(messageError,res);                                    
        }        
    });
});