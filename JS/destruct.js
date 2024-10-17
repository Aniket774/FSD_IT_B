// object destructuring

const person={
    name:"XYZ",
    age: 20,
    salary: 100000,
}
const {name,age,salary}=person;
console.log(name);
console.log(age);
console.log(salary);

// array destructuring

const emp=["ABC",23,120000,"GZB"];
const [n,a,s,c]=emp;
console.log(n);
console.log(a);
console.log(s);
console.log(c);