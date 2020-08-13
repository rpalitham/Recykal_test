import React, { useState, useEffect } from "react";
import "./index.css";

function ProductsList(props) {
  let { products, actions } = props;

  // const [productCount, setProductCount] = useState(0);
  const [productItems, setProducts] = useState([]);

  useEffect(() => {
    let productItems = products.map((product) => {
      return { orderQuantity: 1, ...product };
    });
    setProducts(productItems);
  }, [products]);

  const handleAdd = (e, product) => {
    let index = productItems.findIndex((item) => item.id === product.id);
    if (index >= 0) {
      productItems[index].orderQuantity = productItems[index].orderQuantity + 1;
    }
    setProducts([...productItems]);
  };

  const handleSubract = (e, product) => {
    let index = productItems.findIndex((item) => item.id === product.id);
    if (index >= 0) {
      productItems[index].orderQuantity = productItems[index].orderQuantity - 1;
    }
    setProducts([...productItems]);
  };

  const handleCart = (e, product) => {
    let { addProductToCart } = actions;
    addProductToCart(product);
  };

  return (
    <div className="products-list">
      <header>
        <h3>Product List</h3>
      </header>
      {productItems.length
        ? productItems.map((product, index) => (
            <div className="product" key={"product-" + index}>
              <img src={product.icon} alt="icon"></img>
              <div>
                <label>{product.name}</label>
                <div>
                  <span>{product.price}</span>
                </div>
              </div>
              <div>
                <button onClick={(e) => handleSubract(e, product)}>-</button>
                <span style={{ margin: "0px 15px" }}>
                  {product.orderQuantity}
                </span>
                <button onClick={(e) => handleAdd(e, product)}>+</button>
              </div>
              <div>
                <button onClick={(e) => handleCart(e, product)}>
                  Add to cart
                </button>
              </div>
            </div>
          ))
        : "No Products"}
    </div>
  );
}

export default ProductsList;
