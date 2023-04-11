let factorial = 1;
let i = 1;
while(true){
    factorial = factorial * i;
    i++;
    if(i > 10){
        break;
    }
}
console.log(factorial);