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
