MenuFooter();
var xCal = 0;
var xLevel_Point = 0;
var CoinCheck = 0;



function OpenPopMenu() {
    var xLine = "";
/*
    xLine += '<div class="clr"style="height:10px;"></div>';
    xLine += '<div style="width:95%; margin:0px auto 20px auto; height: 200px;">';
    xLine += '<div class="box-menu-game" onclick="window.location.href=\'groupnews.html#ttbNews\';" style="height:95px;"><img src="./icon/icon-news.png" style="width:60px;"><div class="text-team1">ข่าวสารธนาคาร</div></div>';
    xLine += '<div class="box-menu-game" onclick="window.location.href=\'home.html#menusystem\';" style="height:95px;"><img src="./icon/icon-app.png" style="width:60px;"><div class="text-team1">ระบบงานที่เกี่ยวข้อง</div></div>';
    xLine += '<div class="box-menu-game" onclick="window.location.href=\'home.html#menugame\';" style="height:95px;"><img src="./icon/icon-player.png" style="width:60px;"><div class="text-team1">ภารกิจสะสมเหรียญ</div></div>';
    xLine += '<div class="box-menu-game" onclick="window.location.href=\'webboard.html\';" style="height:95px;"><img src="./icon/icon-question.png" style="width:60px;"><div class="text-team1">ห้องคำถาม-คำตอบ</div></div>';
    xLine += '<div class="box-menu-game" onclick="window.location.href=\'catalog.html\';" style="height:95px;"><img src="./icon/icon-redeem.png" style="width:60px;"><div class="text-team1">แลกของรางวัล</div></div>';
    xLine += '<div class="box-menu-game" onclick="window.location.href=\'gamezone.html\';" style="height:95px;"><img src="./icon/icon-game.png" style="width:60px;"><div class="text-team1">Game Zone</div></div>';
    xLine += '</div><div class="clr"></div>';
    xLine += '<div style="margin: 10px auto 15px 10px;">';
    xLine += '<div class="menu-box1" onclick="window.location.href=\'home.html\';">';
    xLine += '<div class="menu-box-img1"><img src="./icon/icon-01.png" style="width:35px;"></div>';
    xLine += '<div class="menu-box-text1" style="color:#0056ff;">หน้าแรก</div></div>';
    xLine += '<div class="menu-box1" onclick="window.location.href=\'profile.html\';">';
    xLine += '<div class="menu-box-img1"><img src="./icon/icon-profile.png" style="width:35px;"></div>';
    xLine += '<div class="menu-box-text1" style="color:#0056ff;">ข้อมูลคุณ</div></div>';


    xLine += '<div class="menu-box1" onclick="window.location.href=\'intro-game4.html\';">';
    xLine += '<div class="menu-box-img1"><img src="./icon/auction.png" style="width:35px;"></div>';
    xLine += '<div class="menu-box-text1" style="color:#0056ff;">ประมูล</div></div>';
*/

    xLine += '<div>เมนู ไฟ-ฟ้า ทีทีบี</div>';
    //xLine += '<div class="menu-box-img1"><img src="./icon/icon-16.png" style="width:35px;"></div>';
    //xLine += '<div class="menu-box-text1" style="color:#0056ff;">OpenChat</div></div>';
    //xLine += '<div class="menu-box1" onclick="window.location.href=\'webboard-chat.html?gid=beG8FynIhzWgdYFgaFJ9\';">';
    //xLine += '<div class="menu-box-img1"><img src="./icon/icon-contact.png" style="width:35px;"></div>';
    //xLine += '<div class="menu-box-text1" style="color:#0056ff;">แจ้งปัญหา</div></div>';
    //xLine += '</div>';
    xLine += '<div class="clr" style="height:10px;"></div>';
    xLine += '<center><div class="btn btn-info btn-info-font grey" onclick="CloseMenu()">Close Menu</div></center>';
    $("#MenuFaiFah").html(xLine); 
/*

  var xLine = "";
  var str = "";
  var xCountNews = 0;
  dbGroupNews.where('GroupType','==',2)
  .where('NewsStatus','==',1)
  .orderBy('NewsGroup','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> { 
      str += '<div class="menu-box" onclick="window.location.href=\''+ doc.data().NewsLink +'\';">';
      str += '<div class="menu-box-img"><img src="'+ doc.data().NewsIcon +'" style="width:35px;"></div>';
      str += '<div class="menu-box-text">'+ doc.data().NewsNameWeb +'</div></div>';
    });
    $("#iConMenu").html(str); 
    xLine += '<div style="margin:20px 0 20px 0;">';
    xLine += '<div class="container" style="width:100%;padding:5px;">';
    xLine += '<div style="width:95px;float: left;text-align: center;"><img src="'+ sessionStorage.getItem("LinePicture") +'" class="Profile-img"></div>';
    //xLine += '<div class="Profile-title"><b>'+ sessionStorage.getItem("EmpName_Society") +'</b><br>LineName : '+ sessionStorage.getItem("LineName") +'<br>Phone : '+ sessionStorage.getItem("EmpPhone_Society") +'</div>';
    xLine += '<div class="Profile-title"><b>'+ sessionStorage.getItem("EmpName_Society") +'</b><br>'+ sessionStorage.getItem("LineName") +'<br>Login : '+ sessionStorage.getItem("LastUpdate") +'</div>';
    xLine += '</div></div><div class="clr"></div>';
    xLine += '<div style="height: 70px;background-color: #fff;">';
    xLine += '<div class="box-reward1"> </div>';
    xLine += '<div class="box-reward"><div class="XPpoint">'+ parseFloat(sessionStorage.getItem("Level_Point")).toFixed(0) +'</div>ระดับ<br>ผู้แข่งขัน</div>';
    xLine += '<div class="box-reward"><div class="XPpoint">'+ parseFloat(sessionStorage.getItem("XP_Point")).toFixed(2) +'</div>ประสบการณ์<br>การใช้งาน</div>';
    xLine += '<div class="box-reward"><div class="XPpoint">'+ parseFloat(sessionStorage.getItem("RP_Point")).toFixed(2) +'<img src="./icon/coin.png" class="coin-img"> </div>เหรียญ<br>รางวัล</div>';
    xLine += '<div class="clr" style="height:3px;"></div>'
    //var xNewXP = (parseFloat(sessionStorage.getItem("XP_Point") - parseFloat(xCal);
    var xRatio = (parseFloat(sessionStorage.getItem("XP_Point"))/parseFloat(xCal))*100;
    xLine += '<div class="progress2" style="width:'+ xRatio +'%;"></div>';
    xLine += '<div class="clr"style="height:10px;"></div>';
    //xLine += '<div class="btn-t3" style="margin-top:0px; background-color: #fff;">เมนูกิจกรรมที่เกี่ยวข้อง</div>';
    xLine += '<div style="width:95%; margin:0px auto 20px auto; height: 200px;">';
    xLine += '<div class="box-menu-game" onclick="window.location.href=\'groupnews.html#ttbNews\';" style="height:95px;"><img src="./icon/icon-news.png" style="width:60px;"><div class="text-team1">ข่าวสารธนาคาร</div></div>';
    xLine += '<div class="box-menu-game" onclick="window.location.href=\'home.html#menusystem\';" style="height:95px;"><img src="./icon/icon-app.png" style="width:60px;"><div class="text-team1">ระบบงานที่เกี่ยวข้อง</div></div>';
    xLine += '<div class="box-menu-game" onclick="window.location.href=\'home.html#menugame\';" style="height:95px;"><img src="./icon/icon-player.png" style="width:60px;"><div class="text-team1">ภารกิจสะสมเหรียญ</div></div>';
    xLine += '<div class="box-menu-game" onclick="window.location.href=\'webboard.html\';" style="height:95px;"><img src="./icon/icon-question.png" style="width:60px;"><div class="text-team1">ห้องคำถาม-คำตอบ</div></div>';
    xLine += '<div class="box-menu-game" onclick="window.location.href=\'catalog.html\';" style="height:95px;"><img src="./icon/icon-redeem.png" style="width:60px;"><div class="text-team1">แลกของรางวัล</div></div>';
    xLine += '<div class="box-menu-game" onclick="window.location.href=\'gamezone.html\';" style="height:95px;"><img src="./icon/icon-game.png" style="width:60px;"><div class="text-team1">Game Zone</div></div>';
    xLine += '</div><div class="clr"></div>';
    xLine += '<div style="margin: 10px auto 15px 10px;">';
    xLine += '<div class="menu-box1" onclick="window.location.href=\'home.html\';">';
    xLine += '<div class="menu-box-img1"><img src="./icon/icon-01.png" style="width:35px;"></div>';
    xLine += '<div class="menu-box-text1" style="color:#0056ff;">หน้าแรก</div></div>';
    xLine += '<div class="menu-box1" onclick="window.location.href=\'profile.html\';">';
    xLine += '<div class="menu-box-img1"><img src="./icon/icon-profile.png" style="width:35px;"></div>';
    xLine += '<div class="menu-box-text1" style="color:#0056ff;">ข้อมูลคุณ</div></div>';


    xLine += '<div class="menu-box1" onclick="window.location.href=\'intro-game4.html\';">';
    xLine += '<div class="menu-box-img1"><img src="./icon/auction.png" style="width:35px;"></div>';
    xLine += '<div class="menu-box-text1" style="color:#0056ff;">ประมูล</div></div>';


    xLine += '<div class="menu-box1" onclick="window.location.href=\'openchat.html\';">';
    xLine += '<div class="menu-box-img1"><img src="./icon/icon-16.png" style="width:35px;"></div>';
    xLine += '<div class="menu-box-text1" style="color:#0056ff;">OpenChat</div></div>';
    xLine += '<div class="menu-box1" onclick="window.location.href=\'webboard-chat.html?gid=beG8FynIhzWgdYFgaFJ9\';">';
    xLine += '<div class="menu-box-img1"><img src="./icon/icon-contact.png" style="width:35px;"></div>';
    xLine += '<div class="menu-box-text1" style="color:#0056ff;">แจ้งปัญหา</div></div>';
    xLine += '</div>';
    xLine += '<div class="clr" style="height:10px;"></div>';
    xLine += '<center><div class="btn-t2" onclick="CloseMenu()">Close Menu</div></center>';
    $("#MenuSociety").html(xLine); 
  });

  */


}

/*
function MyPointMenu() {
  var xLine = "";
  if(sessionStorage.getItem("Level_Point")!=null) {
    xLine += '<div class="clr" style="height:10px;"></div><div style="height: 70px;background-color: #ECEFF1; border-radius:10px;">';
    xLine += '<div class="box-reward1"> </div>';
    xLine += '<div class="box-reward"><div class="XPpoint">'+ parseFloat(sessionStorage.getItem("Level_Point")).toFixed(0) +'</div>ระดับ<br>ผู้แข่งขัน</div>';
    xLine += '<div class="box-reward"><div class="XPpoint">'+ parseFloat(sessionStorage.getItem("XP_Point")).toFixed(2) +'</div>ประสบการณ์<br>การใช้งาน</div>';
    xLine += '<div class="box-reward"><div class="XPpoint">'+ parseFloat(sessionStorage.getItem("RP_Point")).toFixed(2) +'<img src="./icon/coin.png" class="coin-img"></div>เหรียญ<br>แลกรางวัล</div>';
    xLine += '</div><div class="clr" style="height:3px;"></div>'
    $("#DisplayMyPoint").html(xLine); 
  }
}
*/



function MenuFooter() {
  var str = "";
  str += '<div class="footer-top"><div class="container">';
  str += '<div class="row"><div class="col-lg-4 col-md-6 footer-newsletter">';
  str += '<h4 style="font-size: 13px;">เมนูที่เกี่ยวข้อง</h4><p style="font-size: 13px;">เราเตรียมเมนูไว้สำหรับให้ท่านได้เลือกเข้าใช้งาน เพื่อให้ท่านได้เข้าถึงข้อมูลได้รวดเร็วมากยิ่งขึ้น</p>';
  str += '<div>';

  str += '<div class="menu-box1" onclick="window.location.href=\'home.html\';">';
  str += '<div class="menu-box-img1"><img src="./icon/icon-01.png" style="width:35px;"></div>';
  str += '<div class="menu-box-text1">หน้าแรก</div></div>';

  str += '<div class="menu-box1" onclick="window.location.href=\'home.html#menusystem\';">';
  str += '<div class="menu-box-img1"><img src="./icon/icon-02.png" style="width:35px;"></div>';
  str += '<div class="menu-box-text1">ระบบงาน</div></div>';

  str += '<div class="menu-box1" onclick="window.location.href=\'groupnews.html#ttbNews\';">';
  str += '<div class="menu-box-img1"><img src="./icon/news-01.png" style="width:35px;"></div>';
  str += '<div class="menu-box-text1">ข่าวธนาคาร</div></div>';

  str += '<div class="menu-box1" onclick="window.location.href=\'home.html#menugame\';">';
  str += '<div class="menu-box-img1"><img src="./icon/icon-03.png" style="width:35px;"></div>';
  str += '<div class="menu-box-text1">ภารกิจ</div></div>';

  str += '<div class="menu-box1" onclick="window.location.href=\'webboard.html\';">';
  str += '<div class="menu-box-img1"><img src="./icon/icon-13.png" style="width:35px;"></div>';
  str += '<div class="menu-box-text1">ถาม-ตอบ</div></div>';

  str += '<div class="menu-box1" onclick="window.location.href=\'profile.html\';">';
  str += '<div class="menu-box-img1"><img src="./icon/icon-08.png" style="width:35px;"></div>';
  str += '<div class="menu-box-text1">ข้อมูลคุณ</div></div>';

  str += '<div class="menu-box1" onclick="window.location.href=\'ranking.html\';">';
  str += '<div class="menu-box-img1"><img src="./icon/icon-06.png" style="width:35px;"></div>';
  str += '<div class="menu-box-text1">LeaderBoard</div></div>';

  str += '<div class="menu-box1" onclick="window.location.href=\'catalog.html\';">';
  str += '<div class="menu-box-img1"><img src="./icon/icon-04.png" style="width:35px;"></div>';
  str += '<div class="menu-box-text1">แลกรางวัล</div></div>';

  str += '<div class="menu-box1" onclick="window.location.href=\'yourrewards.html\';">';
  str += '<div class="menu-box-img1"><img src="./icon/gift-box.png" style="width:35px;"></div>';
  str += '<div class="menu-box-text1">รางวัลคุณ</div></div>';

  str += '<div class="menu-box1" onclick="window.location.href=\'mylog.html\';">';
  str += '<div class="menu-box-img1"><img src="./icon/icon-09.png" style="width:35px;"></div>';
  str += '<div class="menu-box-text1">ตรวจสอบ</div></div>';

  str += '<div class="menu-box1" onclick="window.location.href=\'openchat.html\';">';
  str += '<div class="menu-box-img1"><img src="./icon/icon-16.png" style="width:35px;"></div>';
  str += '<div class="menu-box-text1">OpenChat</div></div>';

  str += '<div class="menu-box1" onclick="window.location.href=\'history.html\';">';
  str += '<div class="menu-box-img1"><img src="./icon/icon-05.png" style="width:35px;"></div>';
  str += '<div class="menu-box-text1">ลงทะเบียน</div></div>';


  str += '<div class="menu-box1" onclick="window.location.href=\'webboard-chat.html?gid=beG8FynIhzWgdYFgaFJ9\';">';
  str += '<div class="menu-box-img1"><img src="./icon/icon-contact.png" style="width:35px;"></div>';
  str += '<div class="menu-box-text1">แจ้งปัญหา</div></div>';

  str += '<div class="menu-box1" onclick="window.location.href=\'gamezone.html\';">';
  str += '<div class="menu-box-img1"><img src="./icon/icon-games.png" style="width:35px;"></div>';
  str += '<div class="menu-box-text1">Game Zone</div></div>';

  str += '<div class="menu-box1" onclick="window.location.href=\'intro-game4.html\';">';
  str += '<div class="menu-box-img1"><img src="./icon/auction.png" style="width:35px;"></div>';
  str += '<div class="menu-box-text1">ประมูล</div></div>';


  str += '</div></div></div></div></div>';
  str += '<div class="container d-md-flex py-4"><div class="mr-md-auto text-center text-md-left">';
  str += '<div class="copyright" style="font-size: 12px; font-weight: 600;">@<span>LINE Retail Society</span></div></div></div>';
  $("#DisplayFooter").html(str);  
}


function OpenMenu() {
  OpenPopMenu();
  document.getElementById('menu').style.display='block';
}


function CloseMenu() {
  document.getElementById('menu').style.display='none';
}

