import React from "react";
import "./index.css";

class CartCheckout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      phoneNumber: "",
      totalItems: 0,
      totalPrice: 0,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    let { data } = this.props.items;
    let totalItems = 0;
    let totalPrice = 0;
    data.forEach((product) => {
      totalItems += product.orderQuantity;
      totalPrice += product.price;
    });
    this.setState({
      totalItems: totalItems,
      totalPrice: totalPrice,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { username, email, phoneNumber } = this.state;
    let phoneValid = /^[1-9]{1}[0-9]{9}$/;
    if (!phoneNumber.match(phoneValid)) {
      alert("please give valid phone number ");
    }
    if (username && email && phoneNumber) {
      console.log("username : ", username);
      console.log("email : ", email);
      console.log("phoneNumber : ", phoneNumber);
      alert("your Items are placed. Thank you");
    }
  };

  displayTotal = () => {
    let { data } = this.props.items;
    let totalItems = 0;
    let totalPrice = 0;
    data.forEach((product) => {
      totalItems += product.orderQuantity;
      totalPrice += product.price;
    });
    return (
      <div>
        <div style={{ margin: "5px" }}>Total Items : {totalItems}</div>
        <div style={{ margin: "5px" }}>Total Price : {totalPrice}</div>
      </div>
    );
  };

  render() {
    let { data } = this.props.items;
    let { username, email, phoneNumber } = this.state;
    return (
      <div className="checkout-form">
        <header style={{ margin: "20px" }}>
          <h3>Checkout form</h3>
        </header>

        {data.length ? this.displayTotal() : null}
        <form onSubmit={this.handleSubmit} className="form-content">
          <div>
            <input
              type="text"
              value={username}
              name="username"
              placeholder="Username"
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <input
              type="email"
              value={email}
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <input
              type="number"
              value={phoneNumber}
              name="phoneNumber"
              placeholder="+ 91 *********"
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit" onClick={this.handleSubmit}>
            checkout
          </button>
        </form>
      </div>
    );
  }
}

export default CartCheckout;
