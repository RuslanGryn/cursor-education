const water = 15.678;
const iceCream = 123.965;
const burger = 90.2345;

console.log("Maximum - " + Math.max(water, iceCream, burger));

console.log("Minimum - " + Math.min(water, iceCream, burger));

let sum = water + iceCream + burger;
console.log('Cost - ' + sum);

let sumFloor = Math.floor(water) +Math.floor(iceCream) +Math.floor(burger);

console.log("Сума заокруглена до сотень" + Math.round(sumFloor / 100) * 100);

console.log(sumFloor % 2 === 0);

console.log(500 - sum);

console.log((sum / 3).toFixed(2));


let discount = Math.random() * 10;
console.log(discount);
console.log((sum - ((sum / 100) * discount)).toFixed(2));

console.log("Чистий прибуток " + ((sum / 2) - ((sum / 100) * discount)).toFixed(0));
