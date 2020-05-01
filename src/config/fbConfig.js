import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

    var config = {
        apiKey: "AIzaSyAbq93-i2TggFPOj4eXXXFlzH-pP7I-LY8",
        authDomain: "firebox-acddd.firebaseapp.com",
        databaseURL: "https://firebox-acddd.firebaseio.com",
        projectId: "firebox-acddd",
        storageBucket: "firebox-acddd.appspot.com",
        messagingSenderId: "275256071562",
        appId: "1:275256071562:web:f92cfda4c23351c91f6473",
        measurementId: "G-9829KS6D83"
      };
      // Initialize Firebase
      firebase.initializeApp(config);
      
    firebase.firestore().settings({timestampsInSnapshots: true});
    export default firebase;
