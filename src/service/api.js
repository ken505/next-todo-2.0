import firebase from "firebase/app";
import { db } from "./firebase";

export const addTodo = (content, uid) => {
  db.collection("todo").add({
    content: content,
    uid: uid,
    isComplete: false,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

