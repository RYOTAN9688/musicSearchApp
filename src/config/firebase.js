import firebase from 'firebase/app'
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBZF0JF-2j31vNmzjxsXpu3E4D-Y8LXIyQ",
    authDomain: "musicsearch-e79ac.firebaseapp.com",
    projectId: "musicsearch-e79ac",
    storageBucket: "musicsearch-e79ac.appspot.com",
    messagingSenderId: "901950953289",
    appId: "1:901950953289:web:2288148df760a973662c98"
}

firebase.initializeApp(firebaseConfig)//Appの初期化を実行

export default firebase;