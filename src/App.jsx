import "./App.css";
import ProductsList from "./screens/products";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./screens/product_detail";

function App() {
  return (
      <Routes>
        <Route path="/" element={<ProductsList />}/>
          <Route path="/details/:id" element={<ProductDetail />} />
      </Routes>
  );
}

export default App;
