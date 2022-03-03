const arr = [1, 4, 2, 4, 3, 2, 3];


// function getMul(arr) {
//     if (!arr || arr.length <= 1) return [];
//     let total = 1;
//     for (let i = 0; i < arr.length; i++) {
//         total = total * arr[i];
//     }
//     return arr.map((element) => total / element);
// }

// console.log(getMul(arr));

const a = arr.filter((item) => {
    return item === 0;
}).length;



console.log(a);