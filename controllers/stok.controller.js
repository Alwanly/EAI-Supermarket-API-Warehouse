const response = require('../config/response');
const conn = require('../config/connection');



const messageSuccess = "success";
const messageFailed ="failed";
const messageError = "error";

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
        if(err){
            console.log(err);
            response.error(res);
        }
        response.success(messageSuccess,rows,res);
    });    
});

exports.createStok = ((req,res)=>{
    const data = Stok(req.body);
    conn.query("INSERT INTO produk (produk_id,jml_stok,jml_prd_bagus,jml_prd_cacat) VALUES (?,?,?,?)",
    [data.produkID,data.jmlStok,data.jmlProdukBagus,data.jmlProdukCacat],
    (err,rows,fields)=>{
        if(err){
            console.log(err);
            response.error(res);
        }
        response.success(messageSuccess,data,rows);        
    });
});

exports.updateStok = ((req,res)=>{
    const idKategor = req.params.id;
    const data = Kategori(req.body);
    conn.query("UPDATE stok set produk_id=?,jml_stok=?,jml_prd_bagus=?, jml_prd_cacat=? WHERE id_stok=?",
    [data.produkID,data.jmlStok,data.jmlProdukBagus,data.jmlProdukCacat],
    (err,rows,fields)=>{
        if(err){
            console.log(err);
            response.error(res);
        }
        response.success(messageSuccess,data,res);
    })    
});

exports.deleteStok = ((req,res)=>{
    const id = req.params.id;
    conn.query("DELETE FROM stok WHERE id_stok = ?",
    [id],
    (err,rows,fields)=>{
        if(err){
            console.log(err);
            response.error(res);
        }
        response.success(messageSuccess,{'id_produk':id},res);
    })
});