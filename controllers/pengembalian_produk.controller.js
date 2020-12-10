"use strict";
const response = require('../config/response');
const conn = require('../config/connection');

let messageSuccess = "Success";
let messageEmpty = "Empty";
let messageFailed = "Failed"
let messageError = "Server Error";

const PengembalianProduk = ((pengembalian)=>{
    const object = {}
    object.idPengembalian = pengembalian.id_pengembalian;
    object.produkId = pengembalian.produk_id;
    object.keterangan = pengembalian.keterangan;
    object.jmlProduk = pengembalian.jml_produk;
    object.tglPengajuan = pengembalian.tgl_pengajuan;
    object.tglPengembalian = pengembalian.tgl_pengembalian;    
    return object;
});

exports.pengembalianGetAll =((req,res)=>{
    conn.query("SELECT * FROM pengembalian_produk",
    (err,rows,fields)=>{
        try {       
            console.log(fields);
            if(rows.lenght == 0 ) response.success(messageEmpty,"",res);
            else response.success(messageSuccess,rows,res);            
        } catch (error) {            
            console.log(err);
            response.error(messageError,res);                                    
        }       
    });    
});

exports.createPengembalian = ((req,res)=>{
    const data = PengembalianProduk(req.body);
    console.log(data);
    conn.query("INSERT INTO pengembalian_produk (produk_id,keterangan,jml_produk,tgl_pengajuan,tgl_pengembalian) VALUES (?,?,?,?,?)",
    [data.produkId,data.keterangan, data.jmlProduk, data.tglPengajuan, data.tglPengembalian],
    (err,result)=>{
        try {    
            if(result.affectedRows == 0 ) response.failed(messageFailed,res);        
            else response.success(messageSuccess,data,res);              
        } catch (error) {            
            console.log(err);
            response.error(messageError,res);                                    
        }              
    });
});

exports.deletePengembalian = ((req,res)=>{
    const id = req.params.id;
    conn.query("DELETE FROM pengembalian_produk WHERE id_pengembalian = ?",
    [id],
    (err,result)=>{
        try {
            if(result == undefined) response.failed(messageFailed,res) ;
            else response.success(messageSuccess,{'id_pengembalian':id},res);                    
        } catch (error) {
            console.log(err)            
            messageError = (err.sqlMessage ? err.sqlMessage : "");
            response.error(messageError,res);
        }        
    });
});

exports.updatePengembalian = ((req,res)=>{   
    const id = req.params.id; 
    const data = PengembalianProduk(req.body);    
    conn.query("UPDATE pengembalian_produk set produk_id = ?, keterangan=?,jml_produk=?,tgl_pengajuan=?,tgl_pengembalian=? WHERE id_pengembalian=?",
    [data.produkId,data.keterangan,data.jmlProduk,data.tglPengajuan,data.tglPengembalian,id],
    (err,result)=>{
        try {            
            data.idPengembalian = id;
            if(result.affectedRows == 0) response.failed(messageFailed,"",res);
            else response.success(messageSuccess,data,res);            
        } catch (error) {
            console.log(err)        
            response.error(messageError,res)            
        }        
    });
});






