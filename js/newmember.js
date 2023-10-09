var CheckFound = 0;
var xCheck = 0;
var xEmpName = "";
var xIDCard = 0;
var xEmpSex = "";
var xTypeReg = "";
var CheckFoundData = 0;
var xProfile_Status = 0;
var EidNewJoiner = "";
var xLocation = "";
var arrLocation = ['สนญ.','ประชาอุทิศ','จันทน์','บางกอกน้อย','สมุทรปราการ','นนทบุรี'];
var arrLocationE = ['HQ','fai-fah-prachauthit','fai-fah-chan','fai-fah-bangkoknoi','fai-fah-samuthprakarn','fai-fah-nonthaburi'];
var arrInterest = ['ศิลปะ','กีฬา','ดนตรีและ<br>การแสดง','ภาษา','ครัว ขนม<br>และเบเกอรี่','การออกแบบ<br>สิ่งทอ','การออกแบบ<br>อุตสาหกรรม','ท่องเที่ยวเพื่อ<br>ชุมชนยั่งยืน'];
var arrInterestE = ['art','sport','drama','language','cook','carft','industry','travel'];
var arrPush = [];
var xInterest1, xInterest2, xInterest3, xInterest4, xInterest5, xInterest6, xInterest7, xInterest8;
var EidMember = "";

$(document).ready(function () {
  if(sessionStorage.getItem("LineID")==null || sessionStorage.getItem("LineID")=="") { location.href = "index.html"; }
  window.scroll(0, 0);
  xTypeReg = getParameterByName('regtype');
  Connect_DB();
  dbFaiFahRegister = firebase.firestore().collection("faifah_register");
  dbFaiFahMember = firebase.firestore().collection("faifah_member");
  Connect_Profile();
  CheckMember();
});


function getParameterByName(name, url) {
  str = '';
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


function CheckMember() {
  dbFaiFahRegister.where('LineID','==',sessionStorage.getItem("LineID"))
  .limit(1)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=>{
      xCheck=1;
      EidNewJoiner = doc.id;
      xProfile_Status = doc.data().Profile_Status;
      xEmpSex = doc.data().EmpSex;
      xEmpName = doc.data().EmpName;
      xIDCard = doc.data().EmpIDCard;
      if(doc.data().EmpTypeReg!="") {
        xTypeReg = doc.data().EmpTypeReg;
      }
      xLocation = doc.data().EmpLocation;
      arrPush.push(doc.data().CheckBox1,doc.data().CheckBox2,doc.data().CheckBox3,doc.data().CheckBox4,doc.data().CheckBox5,doc.data().CheckBox6,doc.data().CheckBox7,doc.data().CheckBox8);
      $("#empname").html(doc.data().EmpName);
      $("#sex").html(doc.data().EmpSex);
      $("#idcard").html(doc.data().EmpIDCard);
      $("#location").html(doc.data().EmpLocation);
      CheckOldMember();
      //MapDataMember();
    });
    if(xCheck==0) {
      AddProfile();
    }

    if(xProfile_Status==1 || xProfile_Status==2) {
      document.getElementById('savedata').style.display='none';
      document.getElementById('confirmdata').style.display='block';
    } else {
      document.getElementById('savedata').style.display='block';
      document.getElementById('confirmdata').style.display='none';
    }

    $("#empname").html("<input id='txtempname' type='text' value='"+ xEmpName +"'>");
    $("#idcard").html("<input id='txtidcard' type='number' value='"+ xIDCard +"'>");
    if(xTypeReg=="เด็กห้องสมุด") {
      $("#UserNew").html("<div class='radio-toolbar'><input onclick='ChangeLocation(1)' type='radio' id='radio3' name='typereg' value='เด็กห้องสมุด' checked><label for='radio3'>เด็กห้องสมุด</label><input onclick='ChangeLocation(2)' type='radio' id='radio4' name='typereg' value='เด็กไฟ-ฟ้า'><label for='radio4'>เด็กไฟ-ฟ้า</label><input onclick='ChangeLocation(3)' type='radio' id='radio5' name='typereg' value='อาสาสมัคร'><label for='radio5'>อาสาสมัคร</label><input onclick='ChangeLocation(4)' type='radio' id='radio6' name='typereg' value='อาจารย์'><label for='radio6'>อาจารย์</label></div>");
    } else if(xTypeReg=="เด็กไฟ-ฟ้า") {
      $("#UserNew").html("<div class='radio-toolbar'><input onclick='ChangeLocation(1)' type='radio' id='radio3' name='typereg' value='เด็กห้องสมุด'><label for='radio3'>เด็กห้องสมุด</label><input onclick='ChangeLocation(2)' type='radio' id='radio4' name='typereg' value='เด็กไฟ-ฟ้า' checked><label for='radio4'>เด็กไฟ-ฟ้า</label><input onclick='ChangeLocation(3)' type='radio' id='radio5' name='typereg' value='อาสาสมัคร'><label for='radio5'>อาสาสมัคร</label><input onclick='ChangeLocation(4)' type='radio' id='radio6' name='typereg' value='อาจารย์'><label for='radio6'>อาจารย์</label></div>");
    } else if(xTypeReg=="อาสาสมัคร") {
      $("#UserNew").html("<div class='radio-toolbar'><input onclick='ChangeLocation(1)' type='radio' id='radio3' name='typereg' value='เด็กห้องสมุด'><label for='radio3'>เด็กห้องสมุด</label><input onclick='ChangeLocation(2)' type='radio' id='radio4' name='typereg' value='เด็กไฟ-ฟ้า'><label for='radio4'>เด็กไฟ-ฟ้า</label><input onclick='ChangeLocation(3)' type='radio' id='radio5' name='typereg' value='อาสาสมัคร' checked><label for='radio5'>อาสาสมัคร</label><input onclick='ChangeLocation(4)' type='radio' id='radio6' name='typereg' value='อาจารย์'><label for='radio6'>อาจารย์</label></div>");
    } else if(xTypeReg=="อาจารย์") {
      $("#UserNew").html("<div class='radio-toolbar'><input onclick='ChangeLocation(1)' type='radio' id='radio3' name='typereg' value='เด็กห้องสมุด'><label for='radio3'>เด็กห้องสมุด</label><input onclick='ChangeLocation(2)' type='radio' id='radio4' name='typereg' value='เด็กไฟ-ฟ้า'><label for='radio4'>เด็กไฟ-ฟ้า</label><input onclick='ChangeLocation(3)' type='radio' id='radio5' name='typereg' value='อาสาสมัคร'><label for='radio5'>อาสาสมัคร</label><input onclick='ChangeLocation(4)' type='radio' id='radio6' name='typereg' value='อาจารย์' checked><label for='radio6'>อาจารย์</label></div>");
    } else {
      $("#UserNew").html("<div class='radio-toolbar'><input onclick='ChangeLocation(1)' type='radio' id='radio3' name='typereg' value='เด็กห้องสมุด'><label for='radio3'>เด็กห้องสมุด/label><input onclick='ChangeLocation(2)' type='radio' id='radio4' name='typereg' value='เด็กไฟ-ฟ้า'><label for='radio4'>เด็กไฟ-ฟ้า</label><input onclick='ChangeLocation(3)' type='radio' id='radio5' name='typereg' value='อาสาสมัคร'><label for='radio5'>อาสาสมัคร</label><input onclick='ChangeLocation(4)' type='radio' id='radio6' name='typereg' value='อาจารย์'><label for='radio6'>อาจารย์</label></div>");
    }

    if(xEmpSex=="ชาย") {
      $("#sex").html("<div class='radio-toolbar'><input type='radio' id='radio1' name='sex' value='ชาย' checked><label for='radio1'>ชาย</label><input type='radio' id='radio2' name='sex' value='หญิง'><label for='radio2'>หญิง</label></div>");
    } else if(xEmpSex=="หญิง") {
      $("#sex").html("<div class='radio-toolbar'><input type='radio' id='radio1' name='sex' value='ชาย'><label for='radio1'>ชาย</label><input type='radio' id='radio2' name='sex' value='หญิง' checked><label for='radio2'>หญิง</label></div>");
    } else {
      $("#sex").html("<div class='radio-toolbar'><input type='radio' id='radio1' name='sex' value='ชาย'><label for='radio1'>ชาย</label><input type='radio' id='radio2' name='sex' value='หญิง'><label for='radio2'>หญิง</label></div>");
    }

    var str = "";
    str += '<fieldset class="checkbox-group" style="margin-top:5px;"><div class="radio-buttons">';
    for (var i = 0, length = arrLocation.length; i < length; i++) {
      if(arrLocation[i]==xLocation) {
        str += '<label class="custom-radio"><input type="radio" id="r'+ i +'" name="SelectPlace" value="'+ arrLocation[i] +'" checked>';
        str += '<span class="radio-btn"><i class="las la-check"></i><div class="hobbies-icon">';
        str += '<div><img src="./icon/'+ arrLocationE[i] +'.png"></div><div class="radio-label">'+ arrLocation[i] +'</div></div></span></label>';
      } else {
        if(i==0 && (xTypeReg=="เด็กห้องสมุด" || xTypeReg=="เด็กไฟ-ฟ้า")) {

        } else {
          str += '<label class="custom-radio"><input type="radio" id="r'+ i +'" name="SelectPlace" value="'+ arrLocation[i] +'">';
          str += '<span class="radio-btn"><i class="las la-check"></i><div class="hobbies-icon">';
          str += '<div><img src="./icon/'+ arrLocationE[i] +'.png"></div><div class="radio-label">'+ arrLocation[i] +'</div></div></span></label>';
        }
      }
    } 
    str += '</fieldset></div>';
    $("#DisplayLocation").html(str);

    var str1 = "";
    str1 += '<fieldset class="checkbox-group" style="margin-top:0px;">';
    for (var i = 0, length = arrInterest.length; i < length; i++) { 
      if(arrInterestE[i]==arrPush[i]) { 
        if(i==0) {
          xInterest1 = arrPush[i];
        } else if(i==1) {
          xInterest2 = arrPush[i];
        } else if(i==2) {
          xInterest3 = arrPush[i];
        } else if(i==3) {
          xInterest4 = arrPush[i];
        } else if(i==4) {
          xInterest5 = arrPush[i];
        } else if(i==5) {
          xInterest6 = arrPush[i];
        } else if(i==6) {
          xInterest7 = arrPush[i];
        } else if(i==7) {
          xInterest8 = arrPush[i];
        }
        //xInterest+i = arrPush[i];
        str1 += '<div class="checkbox"><label class="checkbox-wrapper">';
        str1 += '<input type="checkbox" class="checkbox-input" id="c'+ i +'" name="SelectJob" value="'+ arrInterest[i] +'" onclick="Interest(\''+ i +'\',\''+ arrInterestE[i] +'\')" checked/>';
        str1 += '<span class="checkbox-tile"><span class="checkbox-icon"><img src="./icon/'+ arrInterestE[i] +'.png" style="width:60px">';
        str1 += '</span><span class="checkbox-label">'+ arrInterest[i] +'</span></span></label></div>';
        //$("#c"+i+"").html(str1);
      } else {
        if(i==0) {
          xInterest1 = "";
        } else if(i==1) {
          xInterest2 = "";
        } else if(i==2) {
          xInterest3 = "";
        } else if(i==3) {
          xInterest4 = "";
        } else if(i==4) {
          xInterest5 = "";
        } else if(i==5) {
          xInterest6 = "";
        } else if(i==6) {
          xInterest7 = "";
        } else if(i==7) {
          xInterest8 = "";
        }
        str1 += '<div class="checkbox"><label class="checkbox-wrapper">';
        str1 += '<input type="checkbox" class="checkbox-input" id="c'+ i +'" name="SelectJob" value="'+ arrInterest[i] +'" onclick="Interest(\''+ i +'\',\''+ arrInterestE[i] +'\')"/>';
        str1 += '<span class="checkbox-tile"><span class="checkbox-icon"><img src="./icon/'+ arrInterestE[i] +'.png" style="width:60px">';
        str1 += '</span><span class="checkbox-label">'+ arrInterest[i] +'</span></span></label></div>';
        //$("#c"+i+"").html(str1);
      }
    }
    str1 += '</fieldset>';
    //console.log(xInterest1+"==="+xInterest2+"==="+xInterest3);
    $("#DisplayInterest").html(str1);
  });
}


function ChangeLocation(x) {
  var str = "";
  //var CountLength = 0;
  if(x==1) {
    xTypeReg="เด็กห้องสมุด";
    //CountLength = (arrLocation.length-1);
  } else if(x==2) { 
    xTypeReg="เด็กไฟ-ฟ้า";
    //CountLength = (arrLocation.length-1);
  } else if(x==3) { 
    xTypeReg="อาสาสมัคร";
    //CountLength = arrLocation.length;
  } else if(x==4) { 
    xTypeReg="อาจารย์";
    //CountLength = arrLocation.length;
  }
  //console.log(x+"==="+xTypeReg+"==="+xLocation);
  str += '<fieldset class="checkbox-group" style="margin-top:5px;"><div class="radio-buttons">';
  for (var i = 0, length = arrLocation.length; i < length; i++) {
    if(arrLocation[i]==xLocation) {
      str += '<label class="custom-radio"><input type="radio" id="r'+ i +'" name="SelectPlace" value="'+ arrLocation[i] +'" checked>';
      str += '<span class="radio-btn"><i class="las la-check"></i><div class="hobbies-icon">';
      str += '<div><img src="./icon/'+ arrLocationE[i] +'.png"></div><div class="radio-label">'+ arrLocation[i] +'</div></div></span></label>';
    } else {
      if(i==0 && (xTypeReg=="เด็กห้องสมุด" || xTypeReg=="เด็กไฟ-ฟ้า")) {
      } else {
        str += '<label class="custom-radio"><input type="radio" id="r'+ i +'" name="SelectPlace" value="'+ arrLocation[i] +'">';
        str += '<span class="radio-btn"><i class="las la-check"></i><div class="hobbies-icon">';
        str += '<div><img src="./icon/'+ arrLocationE[i] +'.png"></div><div class="radio-label">'+ arrLocation[i] +'</div></div></span></label>';
      }
    }
  } 
  str += '</fieldset></div>';
  $("#DisplayLocation").html(str);
}


function CheckOldMember() {
  //console.log("183-EidMember="+EidMember);
  dbFaiFahMember.where('LineID','==',sessionStorage.getItem("LineID"))
  //.where('EmpIDCard','==',xIDCard)
  //.where('EmpName','==',xEmpName)
  .limit(1)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=>{
      EidMember = doc.id;
      console.log("191-EidMember= "+EidMember);
    });
  });
}


function CheckInterest() {
  dbFaiFahRegister.where('LineID','==',sessionStorage.getItem("LineID"))
  .limit(1)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=>{
      xInterest1 = doc.data().CheckBox1;
      xInterest2 = doc.data().CheckBox2;
      xInterest3 = doc.data().CheckBox3;
      xInterest4 = doc.data().CheckBox4;
      xInterest5 = doc.data().CheckBox5;
      xInterest6 = doc.data().CheckBox6;
      xInterest7 = doc.data().CheckBox7;
      xInterest8 = doc.data().CheckBox8;
    });
  });
}


function Interest(i,t) {
  var ValueItem = "";
  var ValueCheckBox = $('#c'+i+'').is(':checked');
  if($('#c'+i+'').is(':checked') == true) {
    ValueItem = t;
  } else {
    ValueItem = "";
  }
  //if(EidMember!="") {
    if(i==0) {
      dbFaiFahRegister.doc(EidNewJoiner).update({
        CheckBox1 : ValueItem
      });
      if(EidMember!="") {
        dbFaiFahMember.doc(EidMember).update({
          CheckBox1 : ValueItem
        });      
      }
      //console.log("EidMember="+EidMember);
      //xCheckBox1 = ValueItem;
    } else if(i==1) {
      dbFaiFahRegister.doc(EidNewJoiner).update({
        CheckBox2 : ValueItem
      });
      if(EidMember!="") {
        dbFaiFahMember.doc(EidMember).update({
          CheckBox2 : ValueItem
        });      
      }
    } else if(i==2) {
      dbFaiFahRegister.doc(EidNewJoiner).update({
        CheckBox3 : ValueItem
      });
      if(EidMember!="") {
        dbFaiFahMember.doc(EidMember).update({
          CheckBox3 : ValueItem
        });      
      }
    } else if(i==3) {
      dbFaiFahRegister.doc(EidNewJoiner).update({
        CheckBox4 : ValueItem
      });
      if(EidMember!="") {
        dbFaiFahMember.doc(EidMember).update({
          CheckBox4 : ValueItem
        });      
      }
    } else if(i==4) {
      dbFaiFahRegister.doc(EidNewJoiner).update({
        CheckBox5 : ValueItem
      });
      if(EidMember!="") {
        dbFaiFahMember.doc(EidMember).update({
          CheckBox5 : ValueItem
        });      
      }
    } else if(i==5) {
      dbFaiFahRegister.doc(EidNewJoiner).update({
        CheckBox6 : ValueItem
      });
      if(EidMember!="") {
        dbFaiFahMember.doc(EidMember).update({
          CheckBox6 : ValueItem
        });      
      }
    } else if(i==6) {
      dbFaiFahRegister.doc(EidNewJoiner).update({
        CheckBox7 : ValueItem
      });
      if(EidMember!="") {
        dbFaiFahMember.doc(EidMember).update({
          CheckBox7 : ValueItem
        });      
      }
    } else if(i==7) {
      dbFaiFahRegister.doc(EidNewJoiner).update({
        CheckBox8 : ValueItem
      });
      if(EidMember!="") {
        dbFaiFahMember.doc(EidMember).update({
          CheckBox8 : ValueItem
        });      
      }
    }    
  //}
  //console.log(ValueCheckBox+"==="+ValueItem+"==="+i+"==="+t);
}


function SaveProfile() {
  var str2 = "";
  var radios = document.getElementsByName('sex');
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      xEmpSex = radios[i].value;
      break;
    }
  }
  xEmpName = document.getElementById("txtempname").value;
  xIDCard = document.getElementById("txtidcard").value;

  var Xradios1 = document.getElementsByName('typereg');
  //console.log(document.getElementsByName('typereg'));
  for (var i = 0, length = Xradios1.length; i < length; i++) {
    if (Xradios1[i].checked) {
      xTypeReg = Xradios1[i].value;
      break;
    }
  }
  //console.log(xTypeReg);
  //alert("xTypeReg="+xTypeReg);

  var xSelectPlace = document.getElementsByName('SelectPlace');
  //var place_value;
  for(var i = 0; i < xSelectPlace.length; i++){
      if(xSelectPlace[i].checked){
          xLocation = xSelectPlace[i].value;
          //console.log(xSelectPlace[i].value);
      }
  }

  if(xEmpSex=="" || xEmpName=="" || xLocation=="" || xIDCard==0 ) {
    str2 = "<div style='width:80%; text-align:left; margin:auto; font-size:14px;'>กรุณาระบุ<br><br><font color='#ff0000'>";
    if(xEmpSex=="") { str2 += "- เพศของผู้สมัคร<br>"; }
    if(xEmpName=="") { str2 += "- ชื่อ นามสกุลจริง (ภาษาไทย)<br>"; }
    if(xIDCard==0) { str2 += "- เลขบัตรประชาชนผู้สมัคร<br>"; }
    if(xLocation=="") { str2 += "- ศูนย์ไฟ-ฟ้าที่ต้องการเป็นสมาชิก<br>"; }
    str2 += "</font><br>ก่อนทำการบันทึกรายการ<br><br></div>";
    $("#CheckKeyIN").html(str2);
    document.getElementById('id02').style.display='block';
    return;
  }
  UpdateProfile();
}


function AddProfile() {
  //console.log("Add New Record");
  dbFaiFahRegister.add({
    LineID : sessionStorage.getItem("LineID"),
    LineName : sessionStorage.getItem("LineName"),
    LinePicture : sessionStorage.getItem("LinePicture"),
    EmpName : "",
    EmpSex : "",
    EmpIDCard : 0,
    EmpTypeReg : xTypeReg,
    EmpLocation : "",
    CheckBox1 : "",
    CheckBox2 : "",
    CheckBox3 : "",
    CheckBox4 : "",
    CheckBox5 : "",
    CheckBox6 : "",
    CheckBox7 : "",
    CheckBox8 : "",
    Profile_Status : 0
  });
  xProfile_Status = 1;
  CheckMember();
}


function UpdateProfile() {
  var str = "";
  if(xProfile_Status==0) { xProfile_Status = 1; }
  dbFaiFahRegister.doc(EidNewJoiner).update({
     Profile_Status : xProfile_Status,
     EmpSex : xEmpSex,
     EmpName : xEmpName,
     EmpIDCard : xIDCard,
     EmpTypeReg : xTypeReg,
     EmpLocation : xLocation
  }); 
  if(xProfile_Status==2) {
    str += '<div class="btn btn-info btn-info-font grey">ยืนยันการสมัครแล้ว</div> ';
    str += ' <div onclick="CloseAll()" class="btn btn-info btn-info-font grey">ปิดหน้าต่างนี้</div>';
  } else {
    str += '<div onclick="ConfirmReg()" class="btn btn-info btn-info-font green">ยืนยันการสมัคร</div> ';
    str += ' <div onclick="CloseAll()" class="btn btn-info btn-info-font red">ยังไม่ยืนยันตอนนี้</div>';
  }
  $("#ConfirmMember").html(str);
  document.getElementById('id01').style.display='block';
  //MapDataMember();
  //CheckMember();
}


function ConfirmReg() {
  xProfile_Status = 2;
  dbFaiFahRegister.doc(EidNewJoiner).update({
     Profile_Status : xProfile_Status
  }); 
  //CheckMember();
  //AddNewProfile();
  MapDataMember();
  document.getElementById('id01').style.display='none';
  document.getElementById('id03').style.display='block';
  window.scroll(0, 0);
}



var arrCalBox = [];
function CalCheckBox() {
  arrCalBox = [];
  dbFaiFahRegister.where('LineID','==',sessionStorage.getItem("LineID"))
  .limit(1)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=>{
      arrCalBox.push(doc.data().CheckBox1,doc.data().CheckBox2,doc.data().CheckBox3,doc.data().CheckBox4,doc.data().CheckBox5,doc.data().CheckBox6,doc.data().CheckBox7,doc.data().CheckBox8);
    });
    console.log(arrCalBox);
  });
}


function MapDataMember() {
  CalCheckBox();
  //CheckInterest();
  //console.log("xIDCard="+xIDCard);
  //var EidMember = "";
  //console.log("Map Data");
  dbFaiFahMember.where('EmpIDCard','==',xIDCard)
  .where('EmpName','==',xEmpName)
  //dbFaiFahMember.where('LineID','==',sessionStorage.getItem("LineID"))
  .limit(1)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=>{
      EidMember = doc.id;
      dbFaiFahMember.doc(EidMember).update({
         LineID : sessionStorage.getItem("LineID"),
         LineName : sessionStorage.getItem("LineName"),
         LinePicture : sessionStorage.getItem("LinePicture"),
         //EmpName : xEmpName,
         //EmpIDCard : xIDCard,
         EmpSex : xEmpSex,
         EmpLocation : xLocation,
         EmpTypeReg : xTypeReg,
         CheckBox1 : arrCalBox[0],
         CheckBox2 : arrCalBox[1],
         CheckBox3 : arrCalBox[2],
         CheckBox4 : arrCalBox[3],
         CheckBox5 : arrCalBox[4],
         CheckBox6 : arrCalBox[5],
         CheckBox7 : arrCalBox[6],
         CheckBox8 : arrCalBox[7],
         ConfirmBox1 : 0,
         ConfirmBox2 : 0,
         ConfirmBox3 : 0,
         ConfirmDate : "",
         Member_Admin : 0,
         Member_Status : 0
      }); 
    });
    if(EidMember=="") {
      AddNewProfile();
    }
  });
}


function AddNewProfile() {
  //CalCheckBox();
  dbFaiFahMember.add({
    LineID : sessionStorage.getItem("LineID"),
    LineName : sessionStorage.getItem("LineName"),
    LinePicture : sessionStorage.getItem("LinePicture"),
    EmpMemberID : "",
    ImgProfile : "",
    EmpName : xEmpName,
    EmpSex : xEmpSex,
    EmpNickname : "",
    EmpIDCard : xIDCard,
    EmpBirthday : "",
    EmpAge : "",
    EmpTypeReg : xTypeReg,
    EmpLocation : xLocation,
    CheckBox1 : arrCalBox[0],
    CheckBox2 : arrCalBox[1],
    CheckBox3 : arrCalBox[2],
    CheckBox4 : arrCalBox[3],
    CheckBox5 : arrCalBox[4],
    CheckBox6 : arrCalBox[5],
    CheckBox7 : arrCalBox[6],
    CheckBox8 : arrCalBox[7],
    Member_Admin : 0,
    Member_Status : 0
  });
}
/*

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
*/

/*
function ClickBox() {
  document.getElementById('id01').style.display='block';
}

*/

function gotohome() {
  location.href = "index.html";
}


function CloseAll() {
  window.scroll(0, 0);
  document.getElementById('id01').style.display='none';
  document.getElementById('id02').style.display='none';
  document.getElementById('id03').style.display='none';
}

