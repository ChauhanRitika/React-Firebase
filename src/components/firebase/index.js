import firebase from "firebase";
// import "firebase/storage";
// import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBsP4T6s7-0ntkI11gAS2XE1HJFXz6lOW0",
  authDomain: "product-edf45.firebaseapp.com",
  projectId: "product-edf45",
  storageBucket: "product-edf45.appspot.com",
  messagingSenderId: "116479043935",
  appId: "1:116479043935:web:34ee11cab0a5794ef3aeea",
  measurementId: "G-7H30XNQDHX"
};

 firebase.initializeApp(firebaseConfig);

//  const storage = firebase.storage();

 export default firebase;
