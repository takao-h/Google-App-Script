// 毎月15日に登録されているdevの人のカレンダーに締め会の予約を入れる

// イベントを作成
function createEvent(){
  var calendar = CalendarApp.getCalendarById('xxxxxxxxxx@group.calendar.google.com');
  calendar.createEvent('締め会',
                       new Date('2012/3/12 20:00:00'),
                       new Date('2012/3/12 23:00:00'),
                       {description: '概要',
                        location: '◯◯病院',
                        guests:'hogehoge@gmail.com'}
                      );
}

// 最終営業日取得
function lastBusinessDay() {
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
