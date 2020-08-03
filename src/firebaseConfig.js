import firebase from "firebase/app";
import "firebase/database";
const config = {
	apiKey: "AIzaSyCSodQob_FW3Txc9NLW0BTNVQR8wez9e40",
	authDomain: "PortfolioByMartinnilsen.firebaseapp.com",
	databaseURL: "https://martinnilsen-58652.firebaseio.com",
	projectId: "martinnilsen-58652",
	storageBucket: "martinnilsen-58652.appspot.com",
};
let firebaseConfig = firebase.initializeApp(config);
export default firebaseConfig;
