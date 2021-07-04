import firebase from "firebase/app";
import { db } from "./firebase";

export const initGet = async (uid) => {
  const todo = await db
    .collection("todo")
    .orderBy("createdAt", "desc")
    .where("uid", "==", uid);

  return todo.get().then((snapShot) => {
    let todos = [];
    snapShot.forEach((doc) => {
      // map を使いたい
      // push をやめて分割代入できないか？
      // console.log(doc);
      // console.log(doc.data);
      todos.push({
        id: doc.id,
        content: doc.data().content,
        isComplete: doc.data().isComplete,
      });
    });
    return todos;
  });
};

export const addTodo = (content, uid) => {
  db.collection("todo").add({
    content: content,
    uid: uid,
    isComplete: false,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

export const todoDelete = (id) => {
  db.collection("todo").doc(id).delete();
};

export const toggleComplete = async (id) => {
  const todo = await db.collection("todo").doc(id).get();
  return db
    .collection("todo")
    .doc(id)
    .update({
      isComplete: todo.data().isComplete ? false : true,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
};
