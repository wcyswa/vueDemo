var http = require('http');
var fs = require('fs');
var path =  require('path');
var express = require('express');
var vueDemoServer = express();

// var vueDemoServer = http.createServer(function (req,res) {
//     var html = fs.readdirSync(__dirname,'./dist/index.html');
//     res.write(html);
//     res.end();
// });

// 因为是单页应用 所有请求都走/dist/index.html
vueDemoServer.get('*', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8')
    res.send(html)
})

vueDemoServer.listen(3000,'127.0.0.1',function (err) {
    if(err){
        console.log(err);
        throw err;
    }
    console.log('3000 success')
})