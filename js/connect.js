function Connect_DB() {
  var firebaseConfig = {
/*
    apiKey: "AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE",
    authDomain: "retailproject-6f4fc.firebaseapp.com",
    projectId: "retailproject-6f4fc",
    databaseURL: "https://file-upload-6f4fc.firebaseio.com",
    storageBucket: "retailproject-6f4fc.appspot.com",
    messagingSenderId: "653667385625",
    appId: "1:653667385625:web:a5aed08500de80839f0588",
    measurementId: "G-9SKTRHHSW9"
*/
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
