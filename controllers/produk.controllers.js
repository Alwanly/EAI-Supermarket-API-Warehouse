const response = require('../config/response');
const conn = require('../config/connection');

const messageSuccess = "success";
const messageFailed ="failed";
const messageError = "error";

const Produk = ((produk)=>{
    const object = {}
    object.idProduk = produk.id_produk;
    object.kategoriId = produk.kategori_id;
    object.namaProduk = produk.nama_produk;
    object.desProduk = produk.deskripsi_produk;
    object.merkProduk = produk.merk_produk;
    object.tglProduksi = produk.tgl_produksi;
    object.tglKadaluarsa = produk.tgl_kadaluarsa;    
    return object;
})


exports.produkAll = ((req,res)=>{
    conn.query('SELECT * FROM produk RIGHT JOIN kategori ON produk.kategori_id = kategori.id',
    (err,rows,fields)=>{
        if(err){
            console.log(err);
        }        
        response.success(messageSuccess,rows,res);        
    });
});


exports.produkByKategori =((req,res)=>{
    const kategori = req.params.kategori;
    conn.query('SELECT * FROM produk RIGHT JOIN kategori ON produk.kategori_id = kategori.id WHERE kategori.kode_kategori = ?',
    [kategori],
    (err,rows,fields)=>{
        if(err) {
            response.error(res)
        };        

        response.success(messageSuccess,rows,res);
    });
});

exports.produkById =((req,res)=>{
    const id= req.params.id;
    conn.query('SELECT * FROM produk RIGHT JOIN kategori ON produk.kategori_id = kategori.id WHERE produk.id_produk = ?',
    [id],
    (err,rows,fields)=>{
        if(err) response.error(res);
        data =(rows != null) ? rows : {'message':'data kosong'};
        response.success(messageSuccess,data,res);
    });
});

exports.createProduk = ((req,res)=>{
    const data = Produk(req.body);
    conn.query("INSERT INTO produk (kategori_id,nama_produk,deskripsi_produk,merk_produk,tgl_produksi,tgl_kadaluarsa)VALUES (?,?,?,?,?,?)",
    [data.kategoriId,data.namaProduk,data.desProduk,data.merkProduk,data.tglProduksi,data.tglKadaluarsa],
    (err,rows,fields)=>{
        if(err) {
            console.log(err);

            response.error(res)
        };                
        response.success(messageSuccess,data,res);
    });
});

exports.deleteProduk = ((req,res)=>{
    const id = req.params.id;

    conn.query("DELETE FROM produk WHERE id_produk = ?",
    [id],
    (err,rows,fields)=>{
        if(err){
            console.log(err);
            response.error(res)
        }
        response.success(messageSuccess,{'id_produk':id},res);        
    });
});

exports.updateProduk = ((req,res)=>{   
    const idProduk = req.params.id; 
    const data = Produk(req.body);    
    conn.query("UPDATE produk set kategori_id = ?, nama_produk=?,deskripsi_produk=?,merk_produk=?,tgl_produksi=?,tgl_kadaluarsa=? WHERE id_produk = ?",
    [data.kategoriId,data.namaProduk,data.desProduk,data.merkProduk,data.tglProduksi,data.tglKadaluarsa,idProduk],
    (err,rows,fields)=>{
        if(err) {
            console.log(err);
            response.error(res);
        }
        response.success(messageSuccess,data,res);
    });
});