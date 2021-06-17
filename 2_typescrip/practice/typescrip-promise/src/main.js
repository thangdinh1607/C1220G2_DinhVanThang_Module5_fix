var money;
var promise = new Promise(function (resolve, reject) {
    if (money > 10000) {
        resolve('car buy');
    }
    else {
        reject('do not enough money');
    }
});
money = 100001;
promise.then(function (result) {
    console.log(result);
}, function (error) {
    console.log(error);
});
// let money: number;
// const buyACar = (car: any) => {
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => {
//             if (money >= 10000) {
//                 resolve("can buy " + car);
//             } else {
//                 reject("Do not enough money");
//             }
//         }, 100);
//     }))
// };
//
// money = 1;
// const promise = buyACar("Vinfast").then(value => {
//     console.log(value);
// }, error => {
//     console.log(error);
// });
