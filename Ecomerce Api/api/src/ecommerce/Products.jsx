import axios from "axios";
import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get("https://dummyjson.com/products");
        console.log(result.data.products);
        setProducts(result.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {/* <h3>Products</h3> */}
      <div id="products">
        {products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <div className="img">
        <img src={product.thumbnail} alt="" />
      </div>
      <div className="heading">
        <h4>{product.title}</h4>
      </div>
      <div className="para">
        <p>{product.price}</p>
      </div>
      
      {/* Add more product details as needed */}
    </div>
  );
}

export default Products;
