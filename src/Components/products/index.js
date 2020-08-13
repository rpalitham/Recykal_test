import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../Redux/Actions/getProducts";
import * as cartActions from "../../Redux/Actions/cart";
import ProductsList from "../ProductList";
import CartList from "../CartList";
import CartCheckout from "../CartCheckout.js";
// import { products } from "../../Utilities/products";
import "./index.css";

class Products extends React.Component {
  componentDidMount() {
    let { productsData } = this.props;
    productsData.getProducts();
  }

  render() {
    let { products, cartItems } = this.props;

    return (
      <div className="products-containier">
        {products.data.length ? (
          <ProductsList
            products={products.data}
            actions={this.props.cartActions}
          />
        ) : (
          "Loading"
        )}
        <div className="right-content" style={{ width: "50%" }}>
          {cartItems.data.length ? (
            <CartList
              items={cartItems.data}
              cartActions={this.props.cartActions}
            />
          ) : (
            "No Items in cart"
          )}
          <CartCheckout items={cartItems} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  cartItems: state.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  productsData: bindActionCreators(productActions, dispatch),
  cartActions: bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
