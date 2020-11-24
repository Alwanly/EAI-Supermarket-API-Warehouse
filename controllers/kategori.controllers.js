const response = require('../config/response');
const conn = require('../config/connection');



const messageSuccess = "success";
const messageFailed ="failed";
const messageError = "error";


const Kategori = ((kategori)=>{
    const object ={};
    object.kodeKategori = kategori.kode_kategori;
    object.namaKategori = kategori.nama_kategori;
    return object;
});

exports.kategoriGetAll =((req,res)=>{
    conn.query("SELECT * FROM kategori",
    (err,rows,fields)=>{
        if(err){
            console.log(err);
            response.error(res);
        }
        response.success(rows,res);
    });    
});

exports.createKategori = ((req,res)=>{
    const data = Kategori(req.body);
    conn.query("INSERT INTO kategori VALUES ('',?,?)",
    [data.kodeKategori,data.namaKategori],
    (err,rows,fields)=>{
        if(err){
            console.log(err);
            response.error(res);
        }
        response.success(messageSuccess,data,rows);        
    });
});

exports.updateKategori = ((req,res)=>{
    const idKategor = req.params.id;
    const data = Kategori(req.body);
    conn.query("UPDATE kategori set kode_kategori=?,nama_kategori=? WHERE id=?",
    [data.kodeKategori,data.namaKategori,idKategor],
    (err,rows,fields)=>{
        if(err){
            console.log(err);
            response.error(res);
        }
        response.success(messageSuccess,data,res);
    })    
});

exports.deleteKategori = ((req,res)=>{
    const idKategor = req.params.id;
    conn.query("DELETE FROM kategori WHERE id = ?",
    [idKategor],
    (err,rows,fields)=>{
        if(err){
            console.log(err);
            response.error(res);
        }
        response.success(messageSuccess,"",res);
    })
});