import { useState } from "react";
import {addDoc,collection} from "firebase/firestore";
import {db} from "../firebase.config";
export default function Todos() {
  const [tache, setTache] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (tache.length > 1) {
        //store in db
      addDoc(collection(db,'todo'),{
      task:tache,
      finished:false
      });
      setTache("");

    } else {
      alert("entrer une valeur");
    }
  }
  function handleChange(e) {
    setTache(e.target.value); 
  }
  return (
    <>
      <div className="col-md-6 offset-md-3 mt-4">
        <div className="card shadow rouded">
          <div className="card-body">
            <h4>Creat a new task</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="task">Add a new task</label>
                <input
                  className="form-control"
                  type="text"
                  id="task"
                  onChange={handleChange}
                  value={tache}
                  placeholder="Add task"
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary w-100">
                  Add task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
