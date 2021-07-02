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
      // map との比較
      // push で破壊してる
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

// const [tasks, setTasks] = useState([
//   {
//     id: "",
//     content: "",
//     isComplete: "",
//   },
// ]);

// setTasks(
// snapshot.docs.map((doc) => ({
//   id: doc.id,
//   content: doc.data().content,
//   isComplete: doc.data().isComplete,
// }));
// );

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
