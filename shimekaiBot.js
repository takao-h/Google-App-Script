var slackAccessToken = "";
function slackBot() {
  var slackApp = SlackApp.create(slackAccessToken);
  var channelId = "#dev"
  var endDay =
  var message = "@here みなさんお疲れ様です。今月の締会は${endDay}です。お店の予約をとりますので、欠席の方は今週中に私までご連絡ください。以上よろしくお願いいたします！"
    var options = {
    // 投稿するユーザーの名前
    username: "hayashi_takao"
  }
  slackApp.postMessage(channelId, message, options);
  // 毎月15日12:00に締め会の連絡をする



  //今日の日付、時間を取得する
   var today = new Date();

  //その月の平日の最終週を取得する

  //post

}
