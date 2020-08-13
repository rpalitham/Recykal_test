import React from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Products from "./Components/products";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Products />
      </Provider>
    </div>
  );
}

export default App;
