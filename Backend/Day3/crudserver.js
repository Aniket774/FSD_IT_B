const http=require("http");
const port=3001;
const server=http.createServer((req,res)=>{
    const data=[{
        id: 1,
        name: "Aniket",
        email: "abc@gmail.com"
    }]
    const url=req.url;
    if(url=="/users" && req.method=="GET"){
        res.writeHead(200,{"Content-Type": "application/json"});
        const obj=data.map((i)=>{
            return{id:i.id,name:i.name,email:i.email};
        })
        res.end(JSON.stringify(obj));
    }
    else if((url=="/users" && req.method=="POST")){
        res.ststusCode=200;
        let body="";
        req.on("data",()=>{
            body+=d.toString();
        })
        req.on("end",()=>{
            const length=data.length;
            const newid=data[length-1].id;
            const jsonbody=JSON.parse(body);
            const {name,email}=jsonbody;
            const newdata={
                id: newid,
                name,
                email
            }
            data.push(newdata);
            
        })
        res.end("data created successfully");
    }
    else{
        res.writeHead(404,{"Content-Type": "text/html"});
        res.end("page not found");
    }

})

server.listen(3001,()=>{
    console.log("Server is running on port 3001")
})