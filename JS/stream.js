const num=[2,4,5,6,7,8,9];
const a=num.filter((n)=>(n%2==0))
console.log(a);
const b=num.filter((n)=>(n%2==0)).map((n)=>(n*3));
console.log(b);
const c=num.filter((n)=>(n%2==0)).map((n)=>(n*3)).reduce((n,s)=>(n+s));
console.log(c);