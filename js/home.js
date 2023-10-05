var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear()+543;
today = dd + '/' + mm + '/' + yyyy;
var cleararray = "";
var xLocation = "";
var arrLocation = ['ประชาอุทิศ','จันทน์','บางกอกน้อย','สมุทรปราการ','นนทบุรี'];
var arrLocationE = ['fai-fah-prachauthit','fai-fah-chan','fai-fah-bangkoknoi','fai-fah-samuthprakarn','fai-fah-nonthaburi'];


$(document).ready(function () {
/*
	var sEmpMember = "faifah0001";
  var sLineID = "Ua6b6bf745bd9bfd01a180de1a05c23b3";
  var sLineName = "Website";
  var sLinePicture = "https://profile.line-scdn.net/0hoLlg-mNNMGNRHiaTpMdPNG1bPg4mMDYrKX8qVnIYOgYpe3QwbCp2AXVKaVN_fnMzOC16V3NMagF8";
  sessionStorage.setItem("LineID", sLineID);
  sessionStorage.setItem("LineName", sLineName);
  sessionStorage.setItem("LinePicture", sLinePicture);
  sessionStorage.setItem("EmpMember_faifah", sEmpMember);
  //if(sessionStorage.getItem("EmpMember_faifah")==null) { location.href = "index.html"; }
  Connect_DB();
  dbFaiFahMember = firebase.firestore().collection("faifah_member");
  CheckMember();
  //CountRewards();
  //CheckData();
*/
	LocationFaiFah();
});


function LocationFaiFah() {
    var str = "";
    str += '<fieldset class="checkbox-group" style="margin-top:5px;"><div class="radio-buttons">';
    for (var i = 0, length = arrLocation.length; i < length; i++) {
      //if(arrLocation[i]==xLocation) {
      //  str += '<label class="custom-radio"><input type="radio" id="r'+ i +'" name="SelectPlace" value="'+ arrLocation[i] +'" checked>';
      //  str += '<span class="radio-btn"><i class="las la-check"></i><div class="hobbies-icon">';
      //  str += '<div><img src="./icon/'+ arrLocationE[i] +'.png"></div><div class="radio-label">'+ arrLocation[i] +'</div></div></span></label>';
      //} else {
        str += '<label class="custom-radio"><input onclick="ClickLocation1('+i+')" type="radio" id="r'+ i +'" name="SelectPlace" value="'+ arrLocation[i] +'">';
        str += '<span class="radio-btn"><i class="las la-check"></i><div class="hobbies-icon">';
        str += '<div><img src="./icon/'+ arrLocationE[i] +'.png"></div><div class="radio-label">'+ arrLocation[i] +'</div></div></span></label>';
      //}
    } 
    str += '</fieldset></div>';
    $("#DisplayLocation").html(str);
}






function ClickLocation1(x) {
	var str = "";
	var Map1 = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15512.266294598438!2d100.57917739775401!3d13.592744821111562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a763966b230f%3A0x6624878eaead470b!2z4Lio4Li54LiZ4Lii4LmM4LmA4Lij4Li14Lii4LiZ4Lij4Li54LmJ4LmE4LifLeC4n-C5ieC4siDguKrguKHguLjguJfguKPguJvguKPguLLguIHguLLguKM!5e0!3m2!1sth!2sth!4v1696494290452!5m2!1sth!2sth" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
	var Map2 = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15504.959529842066!2d100.5229316964846!3d13.703916156567029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f4b6565a8bf%3A0xc9928ad02406e37c!2z4Lio4Li54LiZ4Lii4LmM4LmA4Lij4Li14Lii4LiZ4Lij4Li54LmJ4LmE4LifLeC4n-C5ieC4siDguIjguLHguJnguJfguJnguYw!5e0!3m2!1sth!2sth!4v1696494909375!5m2!1sth!2sth" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
	var Map3 = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.3916187822056!2d100.47524307387255!3d13.75524128663693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299a3ebbca789%3A0xee3732bdc7edb335!2z4Lio4Li54LiZ4Lii4LmM4LmA4Lij4Li14Lii4LiZ4Lij4Li54LmJIOC5hOC4ny3guJ_guYnguLIg4Lia4Liy4LiH4LiB4Lit4LiB4LiZ4LmJ4Lit4Lii!5e0!3m2!1sth!2sth!4v1696495100342!5m2!1sth!2sth" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
	var Map4 = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15512.266294598438!2d100.57917739775401!3d13.592744821111562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a763966b230f%3A0x6624878eaead470b!2z4Lio4Li54LiZ4Lii4LmM4LmA4Lij4Li14Lii4LiZ4Lij4Li54LmJ4LmE4LifLeC4n-C5ieC4siDguKrguKHguLjguJfguKPguJvguKPguLLguIHguLLguKM!5e0!3m2!1sth!2sth!4v1696496581381!5m2!1sth!2sth" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
	var Map5 = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.7493969592633!2d100.42038617387622!3d13.913921886495032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e28fdca1aec0e3%3A0xd14270abb5e593d4!2z4Lio4Li54LiZ4Lii4LmM4LmA4Lij4Li14Lii4LiZ4Lij4Li54LmJ4LmE4LifLeC4n-C5ieC4siDguJnguJnguJfguJrguLjguKPguLU!5e0!3m2!1sth!2sth!4v1696496647132!5m2!1sth!2sth" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
	str += '<div class="section-title"><h2>ศูนย์ไฟ-ฟ้า '+ arrLocation[x] +'</h2></div>';
	str += '<div><img src="./icon/'+ arrLocationE[x] +'.jpg" style="width:100%; margin-bottom: 15px;"></div>';
  if(x==0) {
		str += '<div class="text-detail"><b>แนวคิดการออกแบบอาคาร</b>:<br>การนำไอเดียสนุก ๆ ของเด็ก ๆ ไฟ-ฟ้าประชาอุทิศมาออกแบบ โดยเติมสีสันเพื่อสะท้อนความสดใสร่าเริง ออกแบบอาคารโดยสถาปนิกอาสา Stephen Pimbley ผู้อำนวยการบริษัท SPARK บริษัทออกแบบสถาปัตยกรรม ประเทศสิงคโปร์</div>';
		str += '<div class="text-detail"><b>สนใจสมัครเป็นเด็ก ไฟ-ฟ้า</b>:<br>39/153-4 ถ.ประชาอุทิศ แขวงทุ่งครุ เขตทุ่งครุ กรุงเทพฯ 10140</div>';
		str += '<div class="text-detail"><b>วันเวลาทำการ</b>:<br>อังคาร - ศุกร์: 11:00 - 19:30 น.<br>เสาร์ - อาทิตย์: 08:30 - 17:00 น. (หยุดวันจันทร์)</div>';
		str += '<div class="text-detail"><b>เบอร์โทรศัพท์</b>:<br>02-464-3805</div>';
		str += '<br>'+Map1;
  } else if(x==1) {
		str += '<div class="text-detail"><b>แนวคิดการออกแบบอาคาร</b>:<br>การสร้างประสบการณ์ของพื้นที่ให้คล้ายกับแคทวอล์ค เพื่อให้เด็ก ๆ สามารถมาใช้พื้นที่สร้างสรรค์ผลงานได้อย่างอิสระ ออกแบบอาคารโดยสถาปนิกอาสา Kelly Wheatley เจ้าของบริษัทสถาปนิก Atelier Lumpe</div>';
		str += '<div class="text-detail"><b>วิชาเด่น</b>:<br>ออกแบบสิ่งทอและแฟชั่น</div>';
		str += '<div class="text-detail"><b>สนใจสมัครเป็นเด็ก ไฟ-ฟ้า</b>:<br>71, 73 ซ.จันทน์ 16 แขวงทุ่งวัดดอน เขตสาทร กรุงเทพฯ 10120</div>';
		str += '<div class="text-detail"><b>วันเวลาทำการ</b>:<br>อังคาร - ศุกร์: 11:00 - 19:30 น.<br>เสาร์ - อาทิตย์: 08:30 - 17:00 น. (หยุดวันจันทร์)</div>';
		str += '<div class="text-detail"><b>เบอร์โทรศัพท์</b>:<br>02 -286-7172 <b>มือถือ</b> 084-875-7479</div>';
		str += '<br>'+Map2;
  } else if(x==2) {
		str += '<div class="text-detail"><b>แนวคิดการออกแบบอาคาร</b>:<br>การนำเอกลักษณ์การใช้ชีวิตของคนไทยในชุมชน มาออกแบบให้สามารถสัมผัสได้ด้วยการสำนึกมากกว่าการมองเห็น โดยมีแสงจากธรรมชาติ และอากาศที่ถ่ายเท เสมือนกับเป็นลานกลางแจ้งสำหรับทำกิจกรรมต่าง ๆ ของผู้คนในชุมชน ออกแบบอาคารโดยสถาปนิกอาสา คุณเอกสิทธิ์ แจ้งอ่างหิน เจ้าของบริษัท Anghin Architecture</div>';
		str += '<div class="text-detail"><b>วิชาเด่น</b>:<br>การท่องเที่ยวเพื่อชุมชนยั่งยืน</div>';
		str += '<div class="text-detail"><b>สนใจสมัครเป็นเด็ก ไฟ-ฟ้า</b>:<br>299, 301 ถ.อิสรภาพ แขวงบ้านช่างหล่อ เขตบางกอกน้อย กรุงเทพฯ 10700</div>';
		str += '<div class="text-detail"><b>วันเวลาทำการ</b>:<br>อังคาร - ศุกร์: 11:00 - 19:30 น.<br>เสาร์ - อาทิตย์: 08:30 - 17:00 น. (หยุดวันจันทร์)</div>';
		str += '<div class="text-detail"><b>เบอร์โทรศัพท์</b>:<br>0-2418-0130</div>';
		str += '<br>'+Map3;
  } else if(x==3) {
		str += '<div class="text-detail"><b>แนวคิดการออกแบบอาคาร</b>:<br>การออกแบบโดยผสมผสานกับเอกลักษณ์ของเมืองปากน้ำ ซึ่งนำเอาสีสัน เส้นสาย ความโค้งมนของสายน้ำ และคลื่น มานำเสนอผ่านวัสดุพื้นถิ่น ริมน้ำ ความเป็นเมืองเก่า ผสานเข้ากับความทันสมัยในการออกแบบพื้นที่ เพื่อให้การใช้งานเหมาะสมกับการเรียนรู้ของเด็ก ๆ เพื่อสร้างให้ศูนย์ไฟ-ฟ้า เป็นแลนด์มาร์คแห่งใหม่ของสมุทรปราการ ออกแบบโดย นิรันดร์ เมฆโปธิ และ ณภัทร มหาอุดมพร บริษัท ERDINI DESIGN Co.,Ltd.</div>';
		str += '<div class="text-detail"><b>วิชาเด่น</b>:<br>สื่อสารสร้างสรรค์ออนไลน์ (Creative Content Creator)</div>';
		str += '<div class="text-detail"><b>สนใจสมัครเป็นเด็ก ไฟ-ฟ้า</b>:<br>160/5-6 ถ.ศรีสมุทร ต.ปากน้ำ อ.เมืองสมุทรปราการ จ.สมุทรปราการ 10270</div>';
		str += '<div class="text-detail"><b>วันเวลาทำการ</b>:<br>อังคาร - ศุกร์: 11:00 - 19:30 น.<br>เสาร์ - อาทิตย์: 08:30 - 17:00 น. (หยุดวันจันทร์)</div>';
		str += '<div class="text-detail"><b>เบอร์โทรศัพท์</b>:<br>0-2115-1976 , 06-5924-8798</div>';
		str += '<br>'+Map4;
  } else if(x==4) {
		str += '<div class="text-detail"><b>แนวคิดการออกแบบอาคาร</b>:<br>ออกแบบโดยเน้นความโปร่ง โล่งสบาย โดยใช้แสงจากธรรมชาติ (Natural) และเลือกใช้วัสดุที่ยังคงความเรียบ เท่ ไม่ทำร้ายสิ่งแวดล้อม (Eco-friendly) ผสานเข้ากับความทันสมัยในการออกแบบพื้นที่ “Colorful, Connective & Creativity” เพื่อให้การใช้งาน เหมาะสมกับการเรียนรู้ของเด็ก ๆ ภายใต้คอนเซ็ปต์ Penrose stairs หนึ่งในผลงานด้านศิลปะชื่อดังระดับโลก ที่สื่อถึงบันไดที่เรียงต่อกัน เปรียบเหมือนจินตนาการของเด็ก ๆ ที่ไม่มีสิ้นสุด พร้อมที่จะสร้างสรรค์สิ่งต่าง ๆ ต่อไป สู่แลนด์มารค์แห่งใหม่ ของจังหวัดนนทบุรี พร้อมจุดประกายความคิดสร้างสรรค์ ให้กับเยาวชนผ่าน Wall Arts ที่สะท้อนอัตลักษณ์ชุมชนชาวนนทบุรี ออกแบบโดย Linda May Melendez Corporate Property & Services-ttb</div>';
		str += '<div class="text-detail"><b>วิชาเด่น</b>:<br>สื่อสร้างสรรค์ออนไลน์ (Online Hub) จุดประกาย และสร้างประสบการณ์ ผ่านความคิดสร้างสรรค์ในโลกออนไลน์อย่างเต็มรูปแบบ และคลาสสำหรับผู้พิการทางการได้ยิน อาทิ คลาสครัว และคลาสศิลปะ</div>';
		str += '<div class="text-detail"><b>สนใจสมัครเป็นเด็ก ไฟ-ฟ้า</b>:<br>28/26-28 ถนนบางกรวย-ไทรน้อย ตำบลโสนลอย อำเภอบางบัวทอง จังหวัดนนทบุรี 11110</div>';
		str += '<div class="text-detail"><b>วันเวลาทำการ</b>:<br>อังคาร - ศุกร์: 11:00 - 19:30 น.<br>เสาร์ - อาทิตย์: 08:30 - 17:00 น. (หยุดวันจันทร์)</div>';
		str += '<div class="text-detail"><b>เบอร์โทรศัพท์</b>:<br>0-2227-0073 , 08-1135-4298</div>';
		str += '<br>'+Map5;
  }
  $("#DataFaiFahCenter").html(str);
  document.getElementById('id01').style.display='block';
	//console.log(x);
	console.log(arrLocation[x]);
/*
		str += '<div class="text-detail"></div>';
		str += '<div class="text-detail"></div>';
		str += '<div class="text-detail"></div>';
	str += '';
	str += '';
	str += '';
  var xSelectPlace = document.getElementsByName('SelectPlace');
  for(var i = 0; i < xSelectPlace.length; i++){
    if(xSelectPlace[i].checked){
        xLocation = xSelectPlace[i].value;
        console.log(xSelectPlace[i].value);
    }
  }
*/
}


function CheckMember() {
  dbFaiFahMember.where('EmpMember','==',sessionStorage.getItem("EmpMember_faifah"))
  .limit(1)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=>{
      EmpName = doc.data().EmpName;
  		sessionStorage.setItem("EmpName_faifah", doc.data().EmpName);
    });
    console.log(EmpName);
  });
}



function Clicklink(x) {
	//alert("Click = "+x);
	switch (x) {
	  case 1:
	    location.href = "profile.html";
	    break;
	  case 2:
	    location.href = "workingtime.html";
	    break;
	  case 3:
	    location.href = "home.html";
	    break;
	  case 4:
	    location.href = "home.html";
	    break;
	  case 5:
	    location.href = "home.html";
	    break;
	  case 6:
	    location.href = "home.html";
	    break;
	  default:
	    location.href = "home.html";
	}
}

function CloseMenu() {
  document.getElementById('menu').style.display='none';
}

function CloseAll() {
  document.getElementById('id01').style.display='none';
}
