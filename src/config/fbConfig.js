import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

/**
 * Important Noted
 * firebase config -> please use your own database.
 */
const firebaseConfig = {
	apiKey: "AIzaSyAyDII8ZNbRcDt4YVm49n-OSzXQ-CffFlU",
	authDomain: "wilson-react-learning-plan.firebaseapp.com",
	projectId: "wilson-react-learning-plan",
	storageBucket: "wilson-react-learning-plan.appspot.com",
	messagingSenderId: "525005464570",
	appId: "1:525005464570:web:ba1230556e1208ff95ba43",
	measurementId: "G-J3GWMJEFDG",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
