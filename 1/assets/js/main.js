//start, stop, step
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

//while
//اعداد زوج سه رقمی
// let i = 100; //start
// while (i <= 999) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i++; //step
// }

// رقمی n مجموع ارقام عدد
let n = Number(prompt("adad? "));
let sum = 0;

while (n != 0) {
  let r = n % 10;
  sum += r; //sum=sum+r
  n = Math.floor(n / 10);
}

alert("natije:" + sum);


