

function fetchYoutubeData(){
  //JSONで情報の取得
  // youtubeの動画URLV=よりも後についてるやつ
  var VIDEO_ID = "hoge";

  // APIアクセストークン
  var API_KEY = "fugafuga";

  // インサイト取得のための基本URL
  var BASE_URL = "https://www.googleapis.com/youtube/v3/videos?id=";
  var url =  BASE_URL + VIDEO_ID"&key=" + API_KEY + "&part=snippet,statistics&fields=items(id,snippet,statistics)";

  // 結果をJsonで受けてパース
  var response = UrlFetchApp.fetch(url);
  var data = JSON.parse(response.getContentText());

// 書き込み
  var sheet = SpreadsheetApp.getActive().getSheetByName('sheet1');
  var likeRate = data.items[0].statistics.likeCount/data.items[0].statistics.viewCount*100;
  var commentRate = data.items[0].statistics.commentCount/data.items[0].statistics.viewCount*100;
  sheet.appendRow([currentdate(), data.items[0].statistics.viewCount, data.items[0].statistics.likeCount, data.items[0].statistics.commentCount, likeRate + "%", commentRate + "%"]);

  Logger.log();
}
  //日付データ
 function currentdate() {
	var now = new Date();
	var year = now.getFullYear();
	var mon = now.getMonth()+1; //１を足すこと
	var day = now.getDate();
	var hour = now.getHours();
	var min = now.getMinutes();
	var sec = now.getSeconds();

	//出力用
	var s = year + "年" + mon + "月" + day + "日" + hour + "時" + min + "分" + sec + "秒";
	return s;
 }
