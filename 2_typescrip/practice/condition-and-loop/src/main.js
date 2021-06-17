var sum = 0;
var count = 0;
for (var i = 2; count < 30; i++) {
    var check = true;
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            check = false;
            break;
        }
    }
    if (check) {
        sum += i;
        count++;
    }
}
console.log(count + " ----- " + sum);
