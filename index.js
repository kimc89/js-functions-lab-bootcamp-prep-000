// write your code below!
function happyHolidays() {
  var greeting = "Happy Holidays!";
  return greeting;
}

function happyHolidaysTo(name) {
  var greeting = "Happy Holidays, ${name}!";
  return greeting;
}

function happyHolidayTo(holiday, name) {
  var greeting = "Happy ${holiday}, ${name}!";
  return greeting;
}

function holidayCountdown(days, holiday) {
  var countdown = "It's ${days} until ${holiday}!";
  return countdown;
}

console.log(happyHolidays());
console.log(happyHolidaysTo(Tyler));
console.log(happyHolidayTo(Thanksgiving, Joey));
console.log(holidayCountdown(13, Christmas));

