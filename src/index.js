// const nameArr = ["田中", "山田", "佐藤"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(`${i+1}番目は${nameArr[i]}やで`);
// };

// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// const numAry = [1 ,2, 3, 4, 5];
// const newNumAry = numAry.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumAry);

// const newAry = nameArr.map((name) => {
//   if (name === "田中") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// });
// console.log(newAry);

// const val1 = 1 < 0 ? 'trueやで' : 'falseやで';
// console.log(val1);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100? '100超えたよ': '許容です';
// }
// console.log(checkSum(30, 89));

// const a = true;
// const b = false;

// if (a || b) {
//   console.log("世界は美しいよ")
// };

const num = null;
const fee = num || "金額未設定です";
console.log(`${fee}円`);

const num1 = 66;
const fee1 = num1 && "金額入ったよ";
console.log(fee1);
