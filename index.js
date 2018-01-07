// write your code below!
function happyHolidays() {
  var greeting = "Happy holidays!";
  return greeting;
}

function happyHolidaysTo(name) {
  var greeting = `Happy holidays, ${name}!`;
  return greeting;
}

function happyHolidayTo(holiday, name) {
  var greeting = `Happy ${holiday}, ${name}!`;
  return greeting;
}

function holidayCountdown(days, holiday) {
  var countdown = `It's ${days} until ${holiday}!`;
  return countdown;
}

console.log(happyHolidays());
console.log(happyHolidaysTo(Tyler));
console.log(happyHolidayTo(Thanksgiving, Joey));
console.log(holidayCountdown(20, Christmas));
