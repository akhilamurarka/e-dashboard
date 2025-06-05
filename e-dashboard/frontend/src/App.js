import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Product Listing Component</h1>}></Route>
          <Route path="/add" element={<h1>Add Products Component</h1>}></Route>
          <Route
            path="/update"
            element={<h1>Update Products Component</h1>}
          ></Route>
          <Route path="/logout" element={<h1>Logout Component</h1>}></Route>
          <Route path="/profile" element={<h1>Profile Component</h1>}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
