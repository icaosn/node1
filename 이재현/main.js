var http = require('http')
var fs = require('fs')
var app = http.createServer(function(request , response){
    var template =
`
<html>
<head>
    <title>이재현</title>
</head>
<body>
    <h1>노드js</h1>
    <p>첫번쨰 강의</p>
</body>
</html>
`
if(http.request.url == "/"){
    url = '/index.html'
}
    response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    response.end(fs.readFileSync(__dirname+'./index.html'))
})

app.listen(300)
