function setTriggerDay()
{
  var last = lastBusinessDay();
  ScriptApp.newTrigger("setTriggerHoursLast")
    .timeBased()
    .atDate(last.getFullYear(), last.getMonth()+1, last.getDate())
    .create();
}

function setTriggerHoursLast()
{
  deleteTrigger("setTriggerHoursLast");
  ScriptApp.newTrigger("sendSlack")
    .timeBased()
    .after( 18 * 60 * 60 * 1000 )
    .create();
}

function sendSlack()
{
  deleteTrigger("sendSlack");
  var options =
  {
    "method" : "POST",
    "payload" :
    {
      "token": "********************",
      "channel": "bot-test",
      "text": "@here お疲れ様です。今月の締め会の出欠をとります。欠席の方はできれば今週中に私にご連絡ください。よろしくお願い申し上げます。"
    }
  }
  var url = "https://slack.com/api/chat.postMessage"
  UrlFetchApp.fetch(url, options);
}

function lastBusinessDay()
{
  var today = new Date();

  var lastDayOfThisMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);
  var day; // 0->日曜日

  for (var i = 0; i < 30; i++) {
    day = lastDayOfThisMonth.getDay();
    if (day == 0 || day == 6 || isHoliday(lastDayOfThisMonth)) {
      lastDayOfThisMonth = new Date(today.getFullYear(), today.getMonth()+1, -1 * i);
      continue;
    }
  }
  return lastDayOfThisMonth;
}

function deleteTrigger(name)
{
  var triggers = ScriptApp.getProjectTriggers();
  for(var i=0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() == name) {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }
}

function isHoliday(day)
{
  var startDate = new Date(day.setHours(0, 0, 0, 0));
  var endDate = new Date(day.setHours(23, 59, 59));
  var cal = CalendarApp.getCalendarById("ja.japanese#holiday@group.v.calendar.google.com");
  var holidays =  cal.getEvents(startDate, endDate);
  return holidays.length != 0; // 祝日ならtrue
}
