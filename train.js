// 19.NodeJS event Loop va Callback functionlarni organamiz
// Backend languagelar : 1.Single thread va MultiThread turkumlarga boliadi
// NodeJS single thread yani bir xonali degani.
//---------------------------------------------------------------------

// 1. CALLBACK funtion.
console.log("Jack Ma maslahatlari: ");
const list = [
  "Yaxshi talaba boling", //0-20
  "togri boshliq tanlang va koproq xato qiling", // 20-30
  "uzingizga ishlashni boshlang", //30-40
  "siz kucli bolgan narsalarni qiling", //40-50
  "yoshlarga investitsiya qiling", //50-60
  "endi dam oling", //60
];

function maslahatBering(a, Callback) {
  if (typeof a !== "number") Callback("Insert a number", null);
  else if (a <= 20) Callback(null, list[0]);
  else if (a < 20 && a <= 30) Callback(null, list[1]);
  else if (a < 30 && a <= 40) Callback(null, list[2]);
  else if (a < 40 && a <= 50) Callback(null, list[3]);
  else if (a < 50 && a <= 60) Callback(null, list[4]);
  else {
    setInterval(function () {
      Callback(null, list[5]);
    }, 1000);
  }
}
console.log("passed here 0");
maslahatBering(70, (err, data) => {
  if (err) console.log("ERROR", err);
  else {
    console.log(data);
  }
});
console.log("passed here 1");

//ASYNC functions
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("Insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });

//     // setTimeout(function () {
//     //   return list[5];
//     // }, 5000);
//   }
// }
//
// CALL
//then va catch: methodlari orqali call qildik
//then da error // catchda esa data

// console.log("passed here 0");
// maslahatBering(25)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR", err);
//   });
// console.log("passed here 1");
//
// CALL via await
// async va await orqali sodda function tuzish
// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(71);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();
