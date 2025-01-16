import "./styles.css";

function Product({ item }) {
  return (
      <div className="product_root">
        <p><b>Title : </b>{item?.title} <br/> <b>Description : </b>{item?.description } </p>
      </div>
  );
}

export default Product;
