import { useEffect, useState } from "react";
import Product from "../../components/products";
import { getProducts } from "../../apis/apis";
import { Link } from "react-router-dom";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [loading,setLodaing] = useState(false)

  useEffect(() => {
    invokeProducts();
  }, []);

  async function invokeProducts() {
    const data = await getProducts();
    setProducts(data);
    setProductsData(data);
    setLodaing(true)
  }

  function onChange(text) {
    setProductsData(
      products.filter((item) => item?.title?.toLowerCase().includes(text?.toLowerCase())) ?? []
    );
  }

  return (
    <div>
      <input type="text" placeholder="Search by Title" onChange={(e) => onChange(e.target.value)} />
     {loading ? <ul className="ul">
        {productsData?.map((item) => (
          <li className="li">
            <Link to={"/details/"+item?.id}>
            <Product item={item} />
            </Link>
          </li>
        ))}
      </ul>: <h1>Waiting for response</h1>}
    </div>
  );
}

export default ProductsList;
