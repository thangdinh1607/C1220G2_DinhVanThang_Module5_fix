let money;
const buyCar = (car) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money > 10000) {
                resolve('car buy');
            }
            else {
                reject('do not enough money');
            }
        }, 100);
    }));
};
money = 100;
const promise = buyCar('hello');
promise.then(a => {
    console.log(a);
}, (error) => {
    console.log(error);
});
//# sourceMappingURL=main.js.map