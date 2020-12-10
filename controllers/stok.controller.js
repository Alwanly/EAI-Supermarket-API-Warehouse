"use strict";
const response = require('../config/response');
const conn = require('../config/connection');

let messageSuccess = "Success";
let messageEmpty = "Empty";
let messageFailed = "Failed"
let messageError = "Server Error";
const Stok = ((stok)=>{
    const object ={};
    object.idStok = stok.id_stok;
    object.produkID = stok.produk_id;
    object.jmlStok = stok.jml_stok;
    object.jmlProdukBagus = stok.jml_prd_bagus;
    object.jmlProdukCacat = stok.jml_prd_cacat;
    return object;
});

exports.stokGetAll =((req,res)=>{
    conn.query("SELECT * FROM stok",
    (err,rows,fields)=>{
        try {            
            if(rows.length == 0 ) response.success(messageEmpty,rows,res);            
            else response.success(messageSuccess,rows,res);
        } catch (error) {            
            console.log(err);
            response.error(res);            
        }       
    });    
});

exports.stokGetByMonthAndYears = ((req,res)=>{
    const {bulan,tahun} = req.body;  
    conn.query("SELECT * FROM stok Where Month(created_at)=? && YEAR(created_at)=?",
    [bulan,tahun],
    (err,rows,fields)=>{
        try{                      
            if(rows.length == 0){
                response.success(messageEmpty,rows,res)
            }else{
                response.success(messageSuccess,rows,res)
            } 
        }
        catch (error) {
            console.log(err);
            response.error(messageError,res) ;      
        } 
    })                        
});

exports.createStok = ((req,res)=>{
    const data = Stok(req.body);
    conn.query("INSERT INTO stok (produk_id,jml_stok,jml_prd_bagus,jml_prd_cacat) VALUES (?,?,?,?)",
    [data.produkID,data.jmlStok,data.jmlProdukBagus,data.jmlProdukCacat],
    (err,result)=>{
        try {
            if(result == null) response.failed(messageFailed,"",res);
            response.success(messageSuccess,data,res);       
        } catch (error) {
            console.log(err);
            response.error(messageError,res);            
        }         
    });
});

exports.updateStok = ((req,res)=>{  
    const id = req.params.id; 
    const data = Stok(req.body);
    conn.query("UPDATE stok set produk_id=?,jml_stok=?,jml_prd_bagus=?, jml_prd_cacat=? WHERE id_stok=?",
    [data.produkID,data.jmlStok,data.jmlProdukBagus,data.jmlProdukCacat,id],
    (err,result)=>{
        try {            
            if(result.affectedRows == 0) response.failed(messageFailed,"",res);
            else response.success(messageSuccess,data,res);       
        } catch (error) {
            console.log(err);                  
            response.error(messageError,res);                        
        }  
    })    
});

exports.deleteStok = ((req,res)=>{
    const id = req.params.id;
    conn.query("DELETE FROM stok WHERE id_stok = ?",
    [id],
    (err,result)=>{
        try {            
            response.success(messageSuccess,{'id_stok':id},res);
        } catch (error) {            
            console.log(err);            
            response.error(messageError,res);                        
        }        
    })
});