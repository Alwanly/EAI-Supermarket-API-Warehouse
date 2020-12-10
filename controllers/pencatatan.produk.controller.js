"use strict";
const response = require('../config/response');
const conn = require('../config/connection');

let messageSuccess = "Success";
let messageEmpty = "Empty";
let messageFailed = "Failed"
let messageError = "Server Error";

const PencatatanProduk = ((pencatatan)=>{
    const object ={};
    object.idPencatatan = pencatatan.id_pencatatan;
    object.produk_id = pencatatan.produk_id;
    object.status_id = pencatatan.status_id;
    object.jml_produk=pencatatan.jml_produk;
    return object;
});

exports.pencatatanProdukGetAll =((req,res)=>{
    conn.query("SELECT * FROM pencatatan_produk",
    (err,rows,fields)=>{
        try {            
            if(rows.length == 0) response.success(messageEmpty,"",res);            
            else response.success(messageSuccess,rows,res);            
        } catch (error) {
            console.log(err)            
            response.error(messageError,res)
        }      
    });    
});

exports.createPencatatanProduk = ((req,res)=>{
    const data = PencatatanProduk(req.body);
    conn.query("INSERT INTO pencatatan_produk (status_id,produk_id,jml_produk) VALUES (?,?,?)",
    [data.status_id,data.produk_id,data.jml_produk],
    (err,result)=>{
        try {            
            response.success(messageSuccess,data,res);                    
        } catch (error) {
            response.error(messageError,res);                        
        }        
    });
});

exports.updatePencatatan = ((req,res)=>{
    const idPencatatan = req.params.id;
    const data = PencatatanProduk(req.body);
    conn.query("UPDATE PencatatanProduk set status_id=?,produk_id=?,jml_produk=? WHERE id_pencatatan=?",
    [data.status_id,data.produk_id,data.jml_produk,idPencatatan],
    (err,result)=>{
        try {            
            if(result.affectedRows == 0 ) response.failed(messageFailed,"",res);
            else response.success(messageSuccess,data,res);            
        } catch (error) {            
            response.error(messageSuccess,res);            
        }        
    })    
});

exports.deletePencatatan = ((req,res)=>{
    const id = req.params.id;
    conn.query("DELETE FROM PencatatanProduk WHERE id_pencatatan = ?",
    [id],
    (err,result)=>{
        try {            
            if(result == undefined) response.failed(messageFailed,"",res);
            else response.success(messageSuccess,{'id_pencatatan':id},res);
        } catch (error) {                        
            response.error(messageError,res);
        }        
    })
});