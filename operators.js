console.log("Js dosyasi baglandi");

var deneme = 5;
vardeneme = 6;

let myVar = 5;

const myVar1 = 6;

const num1 = 10;
const num2 = 69;

const toplam = num1 + num2;

console.log(toplam);

const msg1 = "Hello";
const msg2 = "World";

const mesaj = msg1 + msg2;
console.log(mesaj);

const firstName = "Koray";
const lastName = "Koksal";
console.log(firstName, lastName);

const fullName = firstName + " " + lastName;
console.log(fullName);

const fullName2 = `${firstName} ${lastName}`;
console.log(fullName2);

const num3 = "6";
const num4 = "7";
console.log(num3 + num4);
console.log(num3 + 7);

console.log(7 + num3);

console.log(typeof (7 + num3));

const x = 55;
const y = 44;

console.log(x - y);

const myNum = "1";
console.log(x - myNum);

const yourNum = "one";
console.log(x - yourNum);

console.log(x - "a");

let carp1 = 7;
let carp2 = 9;
console.log(carp1 * carp2);

console.log("a" * "b");
console.log("a" * 3);

console.log("5" * "9");
console.log(typeof ("5" * "9"));

const bol1 = 81;
const bol2 = 9;

console.log(bol1 / bol2);

console.log(bol1 / "9");
console.log(bol1 / "dokuz");

console.log(bol2 / 0);
console.log(-61 / 0);

console.log(0 / 5);
console.log(0 / -5);

console.log(57 / 9);

const mod1 = 57;
const mod2 = 9;

console.log(mod1 % mod2);

console.log(22 % 7);

const benimSayim = 967;

const birlerBas = benimSayim % 10;
console.log(birlerBas);
const onlarBas = (benimSayim % 100) / 10;
console.log(onlarBas);

const yuzlerBas = benimSayim / 100;
console.log(yuzlerBas);

console.log(
  `YuzlerBas: ${Math.trunc(yuzlerBas)}, OnlarBas: ${Math.trunc(
    onlarBas
  )}, birlerlBas: ${birlerBas}`
);

const hazirSayi = 56.78888;

console.log(`hairSayi of Circle: ${hazirSayi.toFixed(3)}`);
console.log(`hairSayi of Circle: ${Math.floor(hazirSayi)}`);
console.log(`hairSayi of Circle: ${Math.ceil(hazirSayi)}`);
console.log(`hairSayi of Circle: ${Math.trunc(hazirSayi)}`);
console.log(`hairSayi of Circle: ${Math.round(hazirSayi)}`);

const randomNum = Math.random();
console.log(randomNum);

const randomNum2 = Math.random() * 10;
console.log(randomNum2 + 1);
console.log(Math.round(Math.random() * 10));
