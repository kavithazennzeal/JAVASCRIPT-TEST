function fun() {
    const arr = [12,35,1,10,34,1];
    const kavi = arr.sort((a, b) => {return b-a});
    console.log(kavi[1]);
}
fun()