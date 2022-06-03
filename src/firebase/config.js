import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
	apiKey: "AIzaSyCd8Cwi-Y9pGiLo-3tlQEfbjAGIjZz2yRM",
	authDomain: "vue-chat-a2348.firebaseapp.com",
	projectId: "vue-chat-a2348",
	storageBucket: "vue-chat-a2348.appspot.com",
	messagingSenderId: "910144007248",
	appId: "1:910144007248:web:e00e23e7c4c70e606bf555"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const firestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { firestore, auth, timestamp }