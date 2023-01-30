import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXZ8DfuazqT5VK8buIy10R8Vehowm_xIg",
  authDomain: "react-native-signal-clon-cf3e6.firebaseapp.com",
  projectId: "react-native-signal-clon-cf3e6",
  storageBucket: "react-native-signal-clon-cf3e6.appspot.com",
  messagingSenderId: "560932459647",
  appId: "1:560932459647:web:ae7f833619a5f87f825b4a",
};

let firebaseApp;

if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
  firebaseApp = firebase.app();
}

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
