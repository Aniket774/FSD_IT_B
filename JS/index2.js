const person={
    name:"xyz",
    age:30,
}
const newPerson={...person,name:"abc"};
console.log(person);
//newPerson.age=35;
//console.log(person);
console.log(newPerson);
const emp=["xyz",45,20000];
const newEmp=[...emp];
const newEmp1=[...emp,"GZB"];
console.log(emp);
console.log(newEmp);
console.log(newEmp1);