const http=require("http");
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("content-Type","text/html");
    const url=req.url;
    if(url=="/home"){
        res.write("<h1>My Home Page</h1>");
    }
    else if(url=="/about"){
        res.write("<h1>About Page</h1>");
    }
    else
    {
        res.write("404 Error Page");
    }
    res.write("Hello World!");
    res.end();

})
server.listen(3001,(err)=>{
    try{
        if(err) throw err;
        console.log("Server is running on port no. 3001")
    }
    catch(err){
        console.log("Server Error:",err.message);
    }
    
})