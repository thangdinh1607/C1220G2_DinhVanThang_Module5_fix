



// @ts-ignore
function fibonacci(n: number) {
    if (n < 0) {
        return -1;
    } else if (n == 0 || n == 1) {
        return n;
    } else{
        return fibonacci(n -1 ) + fibonacci(n- 2);
    }
}
let sum:(number | string)='';
function inputFibonacci(count :number) {
    for (let i = 0; i < count; i++) {
        sum +=fibonacci(i) + '-';
    }
    console.log(sum)
}
inputFibonacci(20);


