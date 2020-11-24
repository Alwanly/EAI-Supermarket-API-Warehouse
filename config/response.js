exports.success = ((message,values, res)=>{
    const data ={
        'status':200,
        'message':message,
        'results':values
    };
    res.json(data);
    res.end;
})

exports.error = ((res)=>{
    const data ={
        'status':404,
        'message':'Error'
    };
    res.status(404);
    res.json(data);
    res.end;    
})