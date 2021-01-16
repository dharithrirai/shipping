import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from "./components/navbar";
import ShippingForm from './views/shippingform';
import ListShippings from './views/listshippings.jsx'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <NavBar navLink={{ path: "/orders", Lable: "View Orders" }} />
            <ShippingForm />
          </Route>
          <Route path="/orders">
            <NavBar navLink={{ path: "/", Lable: "Home" }} />
            <ListShippings />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;