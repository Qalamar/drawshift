import firebase from "firebase/app";
import "firebase/firestore";
import { avatar, player, room } from "../store/Store";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_ANALYTICS,
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const createRoom = (roomID: string) => {
  firestore
    .collection("rooms")
    .doc(roomID)
    .set({
      players: [{ name: player.name, avatar: localStorage.getItem("avatar") }],
      words: [],
      scores: [0],
    })
    .then(function () {
      console.log("Document successfully written!");
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
};

export const getRoom = (roomID: string) => {
  firestore
    .collection("rooms")
    .doc(roomID)
    .onSnapshot(function (doc) {
      console.log("Current data: ", doc.data());
      room.setPlayers(doc?.data()?.players);
    });
};

export const joinRoom = (roomID: string) => {
  let user = {
    name: player.name,
    avatar: player.avatar,
  };
  firestore
    .collection("rooms")
    .doc(roomID)
    .update({
      players: firebase.firestore.FieldValue.arrayUnion(user),
    })
    .then(function () {
      console.log("Document successfully updated!");
      room.setLoading(false);
      getRoom(roomID)
    })
    .catch(function (error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
};

export default firebase;
