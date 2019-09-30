let re1 = new RegExp("abc");
let re2 = /[0-9]/;

result= re1.test("abc");//true
console.log(result);
result= re2.test("aniverasion en 1985");
console.log(result);//true



let re3 = /\d+[-|/]\d+[-|/]\d+/;
console.log(re3.test("13-07-1991"));

let re4= /\d\d[-|/]\d\d[-|/]\d\d\d\d/;
let re5= /(\d{1,2}[-|/])(\d{1,2}[-|/])\d{4}/;

var re6 = /["aeiou"]/;
console.log(re6.test("lynx"));

//reemplazo todas las 