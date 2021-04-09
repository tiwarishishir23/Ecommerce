import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import About from "./About/About";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";
import Login from "./Login/Login";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
