const input= '153';
const store=[...input.toString()]
power = input.length;
t=0;
//console.log(store);
store.forEach((data,index) => {
    t+=Math.pow(data,power)
});
if(t==input)
{
console.log("yes armstrong number");
}
else
{
console.log("NO armstrong number")
}