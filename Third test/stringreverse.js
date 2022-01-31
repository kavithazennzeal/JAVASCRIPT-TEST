function func(){
   const string = "Welcome to this Javascript Guide!";
   const split= string.split(" ");
   console.log(split);
   const iterate = split.map((data,index)=>{
     return data.split('').reverse();
   });
   const output = iterate.join("   ");
   console.log(`${output}`);
   }
func();
