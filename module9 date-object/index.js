let now = new Date();

let spesificDate = new Date("April 20, 2022 10:45:00");

let customDate = new Date(2024, 3, 13, 11, 30);

// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getDay())
// console.log(now.getHours())
// console.log(now.getSeconds())
// console.log(now.getMilliseconds())
// console.log(now.getTime())

let date = new Date();

date.setFullYear(2025);

date.setMonth(3);
console.log(date);

let startDate = new Date(2025, 1, 4, 3, 20);
let endDate = new Date(2025, 3, 13, 10, 30);

let diff = endDate - startDate
let diffDate = diff / (1000 * 360 * 24)
console.log(diffDate)
