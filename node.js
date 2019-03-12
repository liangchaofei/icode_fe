var express = require('express');
const path = require('path')
var fs=require("fs");
var app = express();
const bodyParser = require('body-parser')
var proxy = require('http-proxy-middleware');
//方法1：通过express.static访问静态文件，这里访问的是ajax.html
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'dist')))

// app.use(bodyParser.urlencoded({
// 	extended:false
// }))
// app.post('/',function(req,res){
// 	fs.readFile(path.join(__dirname,'./public/post.json'),function(err,data){
// 		if(err){
// 			console.log(err);
// 			return;
// 		}
// 		console.log(data)
// 		res.type('json').end(data.toString())
// 	})
// })
//方法2：使用fs.readFile打开html文件
// app.get("/index.html", function(request, response) {
//    fs.readFile("./"+request.path.substr(1),function(err,data){
//         // body
//         if(err){
//             console.log(err);
//             //404：NOT FOUND
//             // response.writeHead(404,{"Content-Type":"text/html"});
//         }
//         else{
//             //200：OK
//             // response.writeHead(200,{"Content-Type":"text/html"});
//             response.write(data.toString());
//         }
//         response.end();
//     });
// });
var port = 4000;
app.listen(port, function() {   //监听http://127.0.0.1:3000端口
    console.log(`server start in ${port}`);
});