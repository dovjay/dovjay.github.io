function updateClock() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var timeOfDay = (hour < 12) ? "AM" : "PM";
  minute = (minute < 10 ? '0' : '') + minute;
  second = (second < 10 ? '0' : '') + second;
  hour = twelveHour(hour);
  hour = (hour < 10 ? '0' : '') + hour;
  var timeString = `${hour}:${minute}:${second} ${timeOfDay}`;
  document.getElementById("clock").innerHTML = timeString;
}

function twelveHour(hour) {
  if (hour > 12) hour -= 12;
  if (hour == 0) hour = 12;
  return hour;
}

updateClock();