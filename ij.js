var express=require('express');
var app=express();
app.get('/',function(req,res){
    res.send('Welcome to Express JS!');
});
var server=app.listen(8000,function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log('Example app listening cd http://%s:%s',host,port);
});