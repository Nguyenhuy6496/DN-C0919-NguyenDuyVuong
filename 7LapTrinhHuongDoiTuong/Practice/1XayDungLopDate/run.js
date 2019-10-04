let date = new MyDate();
let a = new Date();

date.day = a.getDate();
date.month = a.getMonth() + 1;
date.year = a.getFullYear();

// date.day = 10;
// date.month = 1010;
// date.year = 2019;

// date.setDay(10);
// date.setMonth(10);
// date.setYear(2019);
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();
alert(day + "/" + month + "/" + year);
