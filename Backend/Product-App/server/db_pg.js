const {Client}=require("pg");
const client=new Client({
    host:'localhost',
    port:5432,
    database:'FSD-IT-B',
    user:'postgres',
    password:'@aA03047'
});
client.connect()
.then(()=>{
    console.log("POSTGRESQL Connected");
})
.catch(err=>{
    console.log("DB Error",err.message);
})
const createuser=async()=>{
    try{
        const res=await client.query("insert into users(name,email,age) values ('Abhishek','abhishek@gmail.com',23)")
        console.log("User created successfully",res.rowCount);
    }
    catch(err){
        console.log("insert query error",err.message)
    }
}
//createuser();
const getuser=async()=>{
    try{
        const res=await client.query("select * from users order by age desc")
        console.log("User Data",res.rows);
    }
    catch(err){
        console.log("select query error",err.message)
    }
}
//getuser();
const updateuser=async()=>{
    try{
        const res=await client.query("update users set age=50 where age=21")
        console.log("User edited successfully",res.rowCount);
    }
    catch(err){
        console.log("update query error",err.message)
    }
}
//updateuser();

const app=async()=>{
    await createuser();
    await getuser();
    await updateuser();
    await getuser();
}

app();