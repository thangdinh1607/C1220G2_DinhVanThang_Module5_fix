function checkPrime(n: number): boolean {
    let check: boolean = true;
    if (n < 2) {
        check = false;
    } else if (n > 2) {
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                check = false;
                break;
            }
        }
    } else {
        check = true;
    }
    return check;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum: number = 0;
for (let n of array) {
    if (checkPrime(n)) {
        sum += n;
    }
}
console.log(` sum : ${sum}`);
