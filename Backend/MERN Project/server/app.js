import express from 'express'; // i have used import because i have changd in packgae js from commonjs to type= module
const app = express();
const port= 3002;
/*
  API              METHOD
  /users           GET
  /user            POST
  /user/:id        GET
  /editUser/:id    PATCH
  /deleteUser/:id  DELETE
         
*/
const users=[
    {
        id:1,
        name:"Aniket",
        email: "aniket@gmail.com",
        password:"12345"
    }
]
app.use(express.json())
//API 1
app.get("/users",(req,res)=>{
    res.status(200);
    res.json(users);

})
//API 2
app.post("/user",(req,res)=>{
    const{id,name,email,password}=req.body; // the thing in curly braces are called object deconstructing...

      // this is used to recieve the data of post from postman

      const newId=users.length>0? users[users.length-1].id+1:1001;  // as id hmesa common hona chahiye isiliye autogenrate karenge

      const newUser= {   // here we have creatd object to convert json data
        id:newId,name,email,password
      }
      users.push(newUser);
      res.json({status:"success", message:"user created successfully"})
})
//API 3

app.delete("deleteUser/:id",(req,res)=>{
    const uid = req.params.id;
    if(uid!=null){
        const idex= users.findIndex(ind=>ind.id==uid) // is call predicate
        if(index!=-1){
            users.splice(index,1); // 1 is the number of element
            res.status(200)
            res.json({status:"success",message:"User deleted successfully"})
        }
        else{
            res.status(400)
            res.json({status:"fail",message:"Invalid user id"});
        }
    }
})





app.listen(port,(err)=>{

    try{
        if (err) throw err;
        console.log(`Server is running on port: ${port}`);
    }
    catch(err){
        console.log("Server error : "+err.message);

    }

   
})