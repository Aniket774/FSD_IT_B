const mongoose=require("mongoose");
const mongo_URL="mongodb://localhost:27017";
mongoose.connect(mongo_URL)
.then(()=>{
    console.log("MONGODB Connected Successfully");
})
.catch(err=>{
    console.log("DB Error",err.message);
})
const userSchema=new mongoose.Schema({
    name:{type: String,required:true},
    email:{type: String,required:true,unique:true},
    age: {type: Number,required:true}
})
const User=mongoose.model("userdata",userSchema);
const createUser=async()=>{
    try{
       const newUser=new User({name: "Aman",email:"aman@gmail.com",age:29});
          const user=await newUser.save();
        console.log("User Created Successfully",user);
    }
    catch(err){
      console.log("User Creation Error",err.message)
    }
}
createUser();
const getUser=async()=>{
    try{
      const users= await User.find();
      console.log("List of Users:",users);
    }
    catch(err){
     console.log("user fetching Error",err.message);
    }
}
// getUser();
const updateUser=async()=>{
    try{
     const updaateuserdata=await User.
      findOneAndUpdate({name:"Aman"},{$set:{name: "Aman kumar"}},{new:true});
     console.log("User Updated Successfully",updaateuserdata);
    }
    catch(err){
    console.log("User updation Error",err.message);
    }
}
// updateUser();
const deleteUser=async()=>{
    try{
      await User.deleteOne({name:"Aman"});
      console.log("User Deleted Successfully")
    }
    catch(err){
   console.log("User Deletion error");
    }
}
// deleteUser();
const app=async()=>{
    await createUser();
    await updateUser();
    await getUser();
    await deleteUser();
    await getUser();
}
app();