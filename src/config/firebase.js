import firebase from 'firebase';
// Would leave these keys here for testing purpose

const config = {
  apiKey: "AIzaSyDME6dntHecsUTMzsyooGvbyM5rEggsnFU",
  authDomain: "sweet-url-shortener.firebaseapp.com",
  databaseURL: "https://sweet-url-shortener.firebaseio.com",
  projectId: "sweet-url-shortener",
  storageBucket: "sweet-url-shortener.appspot.com",
  messagingSenderId: "949677047319"
};
firebase.initializeApp(config);

export const database = firebase.database();

