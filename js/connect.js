function Connect_DB() {
  var firebaseConfig = {
    apiKey: "AIzaSyAciknEYhZU7AwOdfYytC1t_AnW2Ee11us",
    authDomain: "faifah-ttb.firebaseapp.com",
    databaseURL: "https://file-upload-faifah-ttb.firebaseio.com",
    /*databaseURL: "https://file-upload-6f4fc.firebaseio.com",*/
    projectId: "faifah-ttb",
    storageBucket: "faifah-ttb.appspot.com",
    messagingSenderId: "842980876200",
    appId: "1:842980876200:web:f33bfad2ccbf263075079d",
    measurementId: "G-DFMSBDT6W8"
  };
  firebase.initializeApp(firebaseConfig);
}


function Connect_Profile() {
  var str = "";
  str += '<div><img src="'+ sessionStorage.getItem("LinePicture") +'" class="user-profile"></div>';
  str += '<div class="NameLine">'+ sessionStorage.getItem("LineName")+'</div>';
  $("#MyProfile").html(str);  
}