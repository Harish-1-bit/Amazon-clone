let n=prompt("enter the number");

let ar=[];
for(let i=1;i<=n; i++){
    ar[i-1]=i;
}

let sum=ar.reduce((rs,cr)=>{
  return rs*cr;
});
console.log(sum);