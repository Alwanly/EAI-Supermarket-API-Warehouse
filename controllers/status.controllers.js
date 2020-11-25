const response = require('../config/response');
const conn = require('../config/connection');


const messageSuccess = "success";
const messageFailed ="failed";
const messageError = "error";

const Status = ((status)=>{
    const object ={}
    object.idStatus = status.idStatus;
    object.kodeStatus = status.kodeStatus;
    object.namaStatus = status.namaStatus;
    return object;
})
exports.statusGetAll =((req,res)=>{
    conn.query("SELECT * FROM status",
    (err,rows,fields)=>{
        if(err){
            console.log(err);
            response.error(res);
        }
        response.success(messageSuccess,rows,res);
    });    
});

exports.createStatus = ((req,res)=>{
    const data = Status(req.body);
    conn.query("INSERT INTO status VALUES ('',?,?)",
    [data.kodeStatus,data.namaStatus],
    (err,rows,fields)=>{
        if(err){
            console.log(err);
            response.error(res);
        }
        response.success(messageSuccess,data,rows);        
    });
});

exports.updateStatus = ((req,res)=>{
    const idStatus = req.params.id;
    const data = Status(req.body);
    conn.query("UPDATE status set kode_status=?,nama_status=? WHERE id=?",
    [data.kodeStatus,data.namaStatus,idStatus],
    (err,rows,fields)=>{
        if(err){
            console.log(err);
            response.error(res);
        }
        response.success(messageSuccess,data,res);
    })    
});

exports.deleteStatus = ((req,res)=>{
    const idStatus = req.params.id;
    conn.query("DELETE FROM status WHERE id = ?",
    [idStatus],
    (err,rows,fields)=>{
        if(err){
            console.log(err);
            response.error(res);
        }
        response.success(messageSuccess,"",res);
    })
});
