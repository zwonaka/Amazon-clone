import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layout/Header";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import ShoppingContext from "./components/shopping/shoppingContext";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import { useContext } from "react";

const promise = loadStripe(
  "pk_test_51PRreOIp9zYRsjIops6DN4v3Vf40iSfLIbG7BaUKZ1LQDJbQIDqUBBZQkQfRToLSR5IWn05MHltNkCDBDGjjxgCO00xI1Qyg1I"
);

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
