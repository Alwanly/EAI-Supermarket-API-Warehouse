const response = require('../config/response');
const conn = require('../config/connection');

const messageSuccess = "success";
const messageFailed ="failed";
const messageError = "error";

const Pengembalian_Produk = ((pengembalian)=>{
    const object = {}
    object.idPengembalian = pengembalian.id_pengembalian;
    object.produkId = pengembalian.produk_id;
    object.keterangan = pengembalian.keterangan;
    object.jmlProduk = pengembalian.jml_produk;
    object.tglPengajuan = pengembalian.tgl_pengajuan;
    object.tglPengembalian = pengembalian.tgl_pengembalian;
});

exports.pengembalianGetAll =((req,res)=>{
    conn.query("SELECT * FROM pengembalian_produk",
    (err,rows,fields)=>{
        if(err){
            console.log(err);
            response.error(res);
        }
        response.success(messageSuccess,rows,res);
    });    
});

exports.createPengembalian = ((req,res)=>{
    const data = Kategori(req.body);
    conn.query("INSERT INTO produk (produk_id,keterangan,jml_produk,tgl_pengajuan,tgl_pengembalian) VALUES (?,?,?,?,?)",
    [data.kodeKategori,data.namaKategori],
    (err,rows,fields)=>{
        if(err){
            console.log(err);
            response.error(res);
        }
        response.success(messageSuccess,data,rows);        
    });
});

exports.deletePengembalian = ((req,res)=>{
    const id = req.params.id;
    conn.query("DELETE FROM pengembalian_produk WHERE id_pengembalian = ?",
    [id],
    (err,rows,fields)=>{
        if(err){
            console.log(err);
            response.error(res)
        }
        response.success(messageSuccess,{'id_pengembalian':id},res);        
    });
});

exports.updatePengembalian = ((req,res)=>{   
    const idProduk = req.params.id; 
    const data = Produk(req.body);    
    conn.query("UPDATE produk set produk_id = ?, keterangan=?,jml_produk=?,tgl_pengajuan=?,tgl_pengembalian=? WHERE id_pengembalian = ?",
    [data.produkId,data.keterangan,data.jmlProduk,data.tglPengajuan,data.tglPengembalian],
    (err,rows,fields)=>{
        if(err) {
            console.log(err);
            response.error(res);
        }
        response.success(messageSuccess,data,res);
    });
});

/** 
 * id_pengembalian
prduk_id
keterangan
jml_produk
tgl_pengajuan
tgl_pengembalian
created_at
updated_at
*/