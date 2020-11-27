const response = require('../config/response');
const conn = require('../config/connection');



const messageSuccess = "success";
const messageFailed ="failed";
const messageError = "error";

const pencatatan_produk = ((pencatatan)=>{
    const object ={};
    object.idPencatatan = pencatatan.id_pencatatan;
    object.produk_id = pencatatan.produk_id;
    object.status_id = pencatatan.status_id;
    object.jml_produk =pencatatan.jml_produk;

    return object;
});

exports.pencatatanProdukGetAll =((req,res)=>{
    conn.query("SELECT * FROM pencatatan_produk",
    (err,rows,fields)=>{
        if(err){
            console.log(err);
            response.error(res);
        }
        response.success(messageSuccess,rows,res);
    });    
});

exports.createPencatatanProduk = ((req,res)=>{
    const data = pencatatan_produk(req.body);
    conn.query("INSERT INTO pencatatan_produk (status_id,produk_id,jml_produk) VALUES (?,?,?)",
    [data.status_id,data.produk_id,data.jml_produk],
    (err,rows,fields)=>{
        if(err){
            console.log(err);
            response.error(res);
        }
        response.success(messageSuccess,data,rows);        
    });
});

exports.updatePencatatan = ((req,res)=>{
    const idPencatatan = req.params.id;
    const data = pencatatan_produk(req.body);
    conn.query("UPDATE pencatatan_produk set status_id=?,produk_id=?,jml_produk=? WHERE id_pencatatan=?",
    [data.status_id,data.produk_id,data.jml_produk,idPencatatan],
    (err,rows,fields)=>{
        if(err){
            console.log(err);
            response.error(res);
        }
        response.success(messageSuccess,data,res);
    })    
});

exports.deletePencatatan = ((req,res)=>{
    const id = req.params.id;
    conn.query("DELETE FROM pencatatan_produk WHERE id_pencatatan = ?",
    [id],
    (err,rows,fields)=>{
        if(err){
            console.log(err);
            response.error(res);
        }
        response.success(messageSuccess,{'id_pencatatan':id},res);
    })
});