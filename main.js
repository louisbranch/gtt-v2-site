var $list = $('#lists');
var source = $('#day-template').html();

Handlebars.registerHelper("time", function (time) {
  return moment(time).format("HH:mm");
});

var template = Handlebars.compile(source);

var calculcateHours = function(time) {
  var hours = Math.floor(time / 60);
  hours = hours < 10 ? '0'+hours : hours
  var min = (time % 60);
  min = min < 10 ? '0'+min : min
  return hours+':'+min;
};

var displayDays = function(day) {
  if (day.tasks) {
    day.hours = calculcateHours(day.duration);
    var html = template(day);
    $list.append(html);
  }
};

function duration(days) {
  return days.reduce(function (acc, day) {
    return acc + day.duration;
  }, 0);
}

function price(days) {
  var mins = duration(days);
  return (Math.floor(mins / 60) * 30) + (((mins % 60) * 30) / 60);
}

function time(days) {
  var mins = duration(days);
  return Math.floor(mins/60) + ":" + mins % 60;
}

days.forEach(displayDays);
