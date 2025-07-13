// firebase-config.js

// ✅ Khởi tạo Firebase với cấu hình của bạn
const firebaseConfig = {
  apiKey: "AIzaSyC3efxhC604ByozYywtQknTRbLeeSxtrlo",
  authDomain: "tieumaquan-app-1304e.firebaseapp.com",
  databaseURL: "https://tieumaquan-app-1304e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tieumaquan-app-1304e",
  storageBucket: "tieumaquan-app-1304e.firebasestorage.app",
  messagingSenderId: "469506665618",
  appId: "1:469506665618:web:ae11398f57297b90b04a4b"
};

// ✅ Khởi tạo Firebase App
firebase.initializeApp(firebaseConfig);

// ✅ Nếu bạn dùng Realtime Database
const db = firebase.database(); // dùng db.ref(...) để thao tác

// ✅ Nếu bạn muốn dùng Firestore (thay vì realtime)
// const db = firebase.firestore();
