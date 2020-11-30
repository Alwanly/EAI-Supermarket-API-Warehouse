exports.success = ((message,values, res)=>{
    const data ={
        'status':true,
        'message':message,
        'results':values
    };
    res.json(data);
    res.end;
})

exports.error = ((message,res)=>{
    const data ={
        'status':false,
        'message':message
    };
    res.status(404);
    res.json(data);
    res.end;    
})