import { useEffect, useState } from "react";
import { getProductDetails } from "../../apis/apis";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [details, setProductDetails] = useState({});
  const [gotReponse, setGotResponse] = useState(false);

  useEffect(() => {
    invokeProductsDetail();
  }, []);

  async function invokeProductsDetail() {
    const data = await getProductDetails(id);
    setGotResponse(true);
    setProductDetails(data);
  }

  return (
    <div>
      {gotReponse && <h1>Detail for product id {id}</h1>}

      {gotReponse ? (
        <div>
          <img height={200} width={200} src={details?.image}></img>

          <p>
            <b>Title</b> : {details?.title} <br />
            <b>Price</b> : {details?.price} <br />
            <b>Description</b> : {details?.description} <br />
            <b>Category</b> : {details?.category} <br />
            <b>Rate</b> : {details?.rating.rate} <br />
          </p>
        </div>
      ) : (
        <h1>Waiting for Response</h1>
      )}
    </div>
  );
}

export default ProductDetail;
