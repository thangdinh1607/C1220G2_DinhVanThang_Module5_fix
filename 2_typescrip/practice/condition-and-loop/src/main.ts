let sum: number = 0;
let count: number = 0;


for (let i = 2; count < 30; i++) {
    let check: boolean = true;
    for (let j = 2; j < i; j++) {
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
console.log(`${count} ----- ${sum}`);



