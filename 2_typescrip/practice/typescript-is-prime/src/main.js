function checkPrime(n) {
    var check = true;
    if (n < 2) {
        check = false;
    }
    else if (n > 2) {
        for (var i = 2; i < n; i++) {
            if (n % i == 0) {
                check = false;
                break;
            }
        }
    }
    else {
        check = true;
    }
    return check;
}
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var n = array_1[_i];
    if (checkPrime(n)) {
        sum += n;
    }
}
console.log(" sum : " + sum);
