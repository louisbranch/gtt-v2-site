var $list = $('#lists');
var $template = $('#day-template').html();

var calculcateHours = function(time) {
  var hours = Math.floor(time / 60);
  hours = hours < 10 ? '0'+hours : hours
  var min = (time % 60);
  min = min < 10 ? '0'+min : min
  return hours+':'+min;
};

var displayDocs = function(row) {
  var doc = row.doc;
  if (doc.tasks) {
    doc.hours = calculcateHours(doc.totalTime);
    var html = Mustache.render($template, doc);
    $list.append(html);
  }
};

data.forEach(displayDocs);
