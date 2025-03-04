const {myReadFile, myWriteFile, myAppendFile, myDeleteFile, username}=require("./filesync1.cjs")
myReadFile();
const data="My FSD Class";
myWriteFile(data);
myReadFile();
myAppendFile(data);
myReadFile();
myDeleteFile("dummy.txt")
console.log("User name=",username);