import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./Component/CheckOut/Checkout";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/checkout">
            <Checkout></Checkout>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
