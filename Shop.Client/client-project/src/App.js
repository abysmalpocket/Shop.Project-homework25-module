import "./App.css";
import MainPage from "./components/MainPage";
import ListProducts from "./components/ListProducts";
import AboutProduct from "./components/AboutProduct";
import { Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/products-list" element={<ListProducts />}></Route>
        <Route path="/:id" element={<AboutProduct />}></Route>
        <Route path="*" element={<Navigate to="/" replace={true} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
