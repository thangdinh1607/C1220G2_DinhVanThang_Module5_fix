function fibonacci(number) {
    if (number < 0) {
        return -1;
    }
    else if (number == 0 || number == 1) {
        return number;
    }
    else {
        return fibonacci(number - 1) + fibonacci(number - 2);
    }
}
let sum = '';
function inputFibonacci(count) {
    for (let i = 0; i < count; i++) {
        sum += fibonacci(i) + '-';
    }
    console.log(sum);
}
inputFibonacci(20);
//# sourceMappingURL=main.js.map