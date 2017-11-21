function fetchAppointmentSchedules() {
  // mail adress
  var EMAIL = 'hoge@gmail.com';

  // sheet name
  var SHEET_NAME = 'シート';
  // start clomun number
  var RANGE = 1;
  // time format
  var FORMAT_TIME = 'yyyy/MM/dd';
  // get sheet info
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME).clear();

  // get calender info
  var calender = CalendarApp.getCalendarById(EMAIL);
  // get Event
  var schedules = calender.getEventsForDay(new Date());

 //カウント
  var count = 0;

  for(var index = 0; index < schedules.length; index++) {
    if (schedules[index].getTitle().match(/【あぽ】|【アポ】|【ｱﾎﾟ】|【apo】|【あポ】|【アぽ】/i)){
      count++;
    }
  }
  var range = RANGE + index;

  // insert name
  sheet.getRange(range, 1).setValue('Name')
  // Output matched condition
  sheet.getRange(range, 2).setValue(count);

}

// 「マイカレンダー」、「他のカレンダー」から名称で検索して取得するサンプルスクリプト 取得したい名前に変更する

function onOpen() {
  var calendars = CalendarApp.getCalendarsByName('日本の祝日');
  if (calendars.length > 0){
    Browser.msgBox(calendars[0].getId());
  }
}
