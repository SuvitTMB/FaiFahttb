var CheckFound = 0;
var CheckFoundData = 0;
var CheckNewStatus = 0;


$(document).ready(function () {

/*
  sessionStorage.clear(); 
  var str = "";
  var sLineID = "Ua6b6bf745bd9bfd01a180de1a05c23b3";
  var sLineName = "Website";
  var sLinePicture = "https://profile.line-scdn.net/0hoLlg-mNNMGNRHiaTpMdPNG1bPg4mMDYrKX8qVnIYOgYpe3QwbCp2AXVKaVN_fnMzOC16V3NMagF8";
  sessionStorage.setItem("LineID", sLineID);
  sessionStorage.setItem("LineName", sLineName);
  sessionStorage.setItem("LinePicture", sLinePicture);
  str += '<div><img src="'+ sessionStorage.getItem("LinePicture") +'" class="user-profile"></div>';
  str += '<div class="NameLine">'+ sessionStorage.getItem("LineName")+'</div>';
  $("#MyProfile").html(str);  
  Connect_DB();
*/
  main();
});


async function main() {
  await liff.init({ liffId: "1657509542-5vpOA8nk" });
  document.getElementById("isLoggedIn").append(liff.isLoggedIn());
  if(liff.isLoggedIn()) {
    getUserProfile();
  } else {
    liff.login();
  }
}


async function getUserProfile() {
  var str = "";
  const profile = await liff.getProfile();
  sessionStorage.setItem("LineID", profile.userId);
  sessionStorage.setItem("LineName", profile.displayName);
  sessionStorage.setItem("LinePicture", profile.pictureUrl);
  str += '<div><img src="'+ sessionStorage.getItem("LinePicture") +'" class="user-profile"></div>';
  str += '<div class="NameLine">'+ sessionStorage.getItem("LineName")+'</div>';
  $("#MyProfile").html(str);  
  Connect_DB();
}


function openWindow() {
  liff.openWindow({
    url: "https://line.me",
    external: true     
  })
}


function Connect_DB() {
  var firebaseConfig = {
    apiKey: "AIzaSyAciknEYhZU7AwOdfYytC1t_AnW2Ee11us",
    authDomain: "faifah-ttb.firebaseapp.com",
    databaseURL: "https://file-upload-faifah-ttb.firebaseio.com",
    projectId: "faifah-ttb",
    storageBucket: "faifah-ttb.appspot.com",
    messagingSenderId: "842980876200",
    appId: "1:842980876200:web:f33bfad2ccbf263075079d",
    measurementId: "G-DFMSBDT6W8"
  };
  firebase.initializeApp(firebaseConfig);
  dbFaiFahMember = firebase.firestore().collection("faifah_member");
  dbFaiFahRegister = firebase.firestore().collection("faifah_register");
  CheckNewMember();
  //CheckMember();
}


function CheckNewMember() {
  var str = "";
  dbFaiFahRegister.where('LineID','==',sessionStorage.getItem("LineID"))
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      CheckNewStatus = doc.data().Profile_Status;
      str = '<div class="home-member">สมาชิก : '+ doc.data().EmpTypeReg +'<br>ของศูนย์ไฟ-ฟ้า '+ doc.data().EmpLocation +'</div>';
      $("#DisplayMember").html(str);
      if(CheckNewStatus==1) {
        //บันทึกรายการผู้สมัครใหม่
        document.getElementById('EditMember').style.display='block';
      } else if(CheckNewStatus==2) { 
        //ยีนยันการสมัคร รอการตรวจสอบข้อมูล
        document.getElementById('ConfirmMember').style.display='block';
      } else if(CheckNewStatus==9) { 
        CheckMember();
      }



/*

      if(doc.data().Member_Status==1 || doc.data().Member_Status==2) {
        EidProfile = doc.id;
        sessionStorage.setItem("EmpID_new", doc.data().EmpID);
        sessionStorage.setItem("EmpName_new", doc.data().EmpName);
        sessionStorage.setItem("EmpRefID_new", doc.id);
        UpdateProfile();
        document.getElementById('loading').style.display='none';
        document.getElementById('GotoFaiFah').style.display='block';
      } else if(doc.data().Member_Status==8) {
        document.getElementById('loading').style.display='none';
        document.getElementById('CancelMember').style.display='block';
      } else if(doc.data().Member_Status==9) {
        document.getElementById('loading').style.display='none';
        document.getElementById('BlockMember').style.display='block';
      }
*/
    });
    if(CheckNewStatus==0) {
      document.getElementById('loading').style.display='none';
      document.getElementById('NewMember').style.display='block';
    }
    document.getElementById('loading').style.display='none';
    document.getElementById('HomeOrder').style.display='block';
    document.getElementById('MyProfile').style.display='block';
  });
}






function CheckMember() {
  dbFaiFahMember.where('LineID','==',sessionStorage.getItem("LineID"))
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      console.log("Found==="+doc.data().Member_Status);
      CheckFoundData = 1;
      EidProfile = doc.id;
      if(doc.data().Member_Status==0) {
        // Member_Status==0 กรอกข้อมูลสมาชิกให้ครบถ้วน
        document.getElementById('loading').style.display='none';
        document.getElementById('UpdateMember').style.display='block';
        //alert("Check");
        //sessionStorage.setItem("EmpID_faifah", doc.data().EmpID);
        //sessionStorage.setItem("EmpName_faifah", doc.data().EmpName);
        //sessionStorage.setItem("EmpRefID", doc.id);
      } else if(doc.data().Member_Status==1) {
        // Member_Status==1 เข้าสู่เว็บไซต์ไฟ-ฟ้า
        document.getElementById('loading').style.display='none';
        document.getElementById('GoFaiFah').style.display='block';
      } else if(doc.data().Member_Status==8) {
        // Member_Status==8 ปิดการใช้งานของสมาชิก
        document.getElementById('loading').style.display='none';
        document.getElementById('CancelMember').style.display='block';

/*
      } else if(doc.data().Member_Status==1) {
        sessionStorage.setItem("EmpID_faifah", doc.data().EmpID);
        sessionStorage.setItem("EmpName_faifah", doc.data().EmpName);
        sessionStorage.setItem("EmpRefID", doc.id);
        //UpdateProfile();
        document.getElementById('loading').style.display='none';
        document.getElementById('GotoFaiFah').style.display='block';
      } else if(doc.data().Member_Status==9) {
        //document.getElementById('loading').style.display='none';
        //document.getElementById('BlockMember').style.display='block';
      //} else {
      //  document.getElementById('loading').style.display='none';
      //  document.getElementById('NewMember').style.display='block';
*/
      }
    });
    if(CheckFoundData==0) {
      //document.getElementById('loading').style.display='none';
      //document.getElementById('NewMember').style.display='block';
    }
    document.getElementById('HomeOrder').style.display='block';
    document.getElementById('MyProfile').style.display='block';
  });
}



function UpdateProfile() {
  dbFaiFahMember.doc(sessionStorage.getItem("EmpRefID")).update({
    LineName : sessionStorage.getItem("LineName"),
    LinePicture : sessionStorage.getItem("LinePicture")
  });
}


function CheckDataMember() {
    location.href = "profile.html";
}

function GotoFaiFah() {
    location.href = "home.html";
}


function RegType(x) {
  if(x==1) {
    location.href = "newmember.html?regtype=นักเรียน";
  } else if(x==2) {
    location.href = "newmember.html?regtype=อาสาสมัคร";
  }
}



function Reg_Waitting() {
  alert("รอการยืนยัน");
}



/*
var gcheck = 0;
function CheckRewards() {
  console.log(sessionStorage.getItem("EmpID_Moon2023"));
  dbGiftRewards.where('EmpID','==',sessionStorage.getItem("EmpID_Moon2023"))
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      gcheck = 1;
      document.getElementById('loading').style.display='none';
      document.getElementById('OldSurvey').style.display='none';
      document.getElementById('ShowRewards').style.display='block';
    });
    if(gcheck==0) {
      document.getElementById('loading').style.display='none';
      document.getElementById('OldSurvey').style.display='block';
      document.getElementById('ShowRewards').style.display='none';
    }
  });
}
*/

function NewDate() {
  var today = new Date();
  var day = today.getDate() + "";
  var month = (today.getMonth() + 1) + "";
  var year = today.getFullYear() + "";
  var hour = today.getHours() + "";
  var minutes = today.getMinutes() + "";
  var seconds = today.getSeconds() + "";
  var ampm = hour >= 12 ? 'PM' : 'AM';
  day = checkZero(day);
  month = checkZero(month);
  year = checkZero(year);
  hour = checkZero(hour);
  minutes = checkZero(minutes);
  seconds = checkZero(seconds);
  dateString = day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds +" "+ ampm;
}


function checkZero(data){
  if(data.length == 1){
    data = "0" + data;
  }
  return data;
}

function ClickBox() {
  document.getElementById('id01').style.display='block';
}

function CloseAll() {
  document.getElementById('id01').style.display='none';
}
