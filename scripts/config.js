const firebaseConfig = {
apiKey: "AIzaSyC-SEma3JShAJXe4h47x9nWPMRf8aF9e7M", authDomain: "tokko-login.firebaseapp.com", databaseURL: "https://tokko-login-default-rtdb.firebaseio.com", projectId: "tokko-login", storageBucket: "tokko-login.appspot.com", messagingSenderId: "604336992026", appId: "1:604336992026:web:8091ec5a0b8a1a5d15c6a3", measurementId: "G-VYVZGNYLC3"
};
const app = firebase.initializeApp(firebaseConfig);
const rdb = firebase.database();
const auth = firebase.auth();
const stg = firebase.storage();
