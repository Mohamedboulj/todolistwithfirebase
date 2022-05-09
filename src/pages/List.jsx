import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase.config";
export default function List() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    onSnapshot(collection(db, "todo"), (snapshot) => {
      setTasks(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);
  //delete task
  function handleDelete(id) {
    const todoRef = doc(db, "todo", id);
    alert("Are you sure you wanna delete task?");
    deleteDoc(todoRef);
  }
  async function handleFinished(id) {
    const todoRef = doc(db, "todo", id);
    await updateDoc(todoRef, {
      finished: true,
    });
  }
  return (
    <>
      <div>
        <div className="col-md-8 offset-md-2 mt-5">
          <h3>List of tasks</h3>
          {tasks.map((todo, key) => {
            return (
              <div className="card shadow-sm rounded my-2" key={key}>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5
                      style={{
                        textDecoration: todo.finished ? "line-through" : "",
                      }}
                    >
                      {todo.task}
                    </h5>
                    <div className="buttons">
                      {todo.finished ? null : (
                        <button
                          className="btn btn-success me-2"
                          onClick={() => {
                            handleFinished(todo.id);
                          }}
                        >
                          Finished
                        </button>
                      )}
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(todo.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
