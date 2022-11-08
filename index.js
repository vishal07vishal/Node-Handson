const http = require('http')
const port = 8000;

const data = JSON.stringify({
    name:" vishal ",
    lName:" Masal ",
    age: 22
 })

const server = http.createServer((req,res)=>{
    res.write(`<h1>First Assignment</h1>`)
    res.write(data)
    res.end()
})

server.listen(port,()=>{
    console.log(`Connected to the ${port} `);
})