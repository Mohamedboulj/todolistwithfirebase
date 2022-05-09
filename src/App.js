import { Route, Routes } from "react-router-dom";
import List from "./pages/List";
import Todos from "./pages/Todos";
import Header from "./partials/Header";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/todo" element={<Todos />} />
          <Route path="/list" element={<List/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
