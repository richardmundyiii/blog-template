import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NavBar from "../src/components/NavBar/NavBar";
import AdminPage from "../src/components/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
