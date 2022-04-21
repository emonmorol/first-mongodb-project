import "./App.css";
import { Route, Routes } from "react-router-dom";
import AddUser from "./Components/AddUser/AddUser";
import Home from "./Components/Home/Home";
import Updateuser from "./Components/UpdateUser/Updateuser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user/add" element={<AddUser />} />
        <Route path="/update/:id" element={<Updateuser />} />
      </Routes>
    </div>
  );
}

export default App;
