"use strict";
exports.success = ((message,values, res)=>{
    const data ={
        'status':true,
        'message':message,
        'results':values
    };
    res.json(data);
    res.end;
})

exports.create = (message,values,res)=>{
    const data ={
        'status':true,
        'message':message,
        'results':values
    };
    res.status(201)
    res.json(data);
    res.end    
}

exports.failed = (message,res)=>{
    const data ={
        'status':false,
        'message':message,
        'results':values
    };
    res.status(401)
    res.end;  
}

exports.error = ((message,res)=>{
    const data ={
        'status':false,
        'message':message
    };
    res.status(500);
    res.json(data);
    res.end;    
})