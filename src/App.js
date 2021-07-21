import GlobalStyle from "./styles/global";
import KitchenOrders from "./pages/KitchenOrders";
import CustomerPage from "./pages/CustomerPage";
import OrderSuccess from "./pages/OrderSuccess";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/order">
            <KitchenOrders />
          </Route>
          <Route path="/success">
            <OrderSuccess />
          </Route>
          <Route path="/">
            <CustomerPage />
          </Route>
        </Switch>
      </Router>

      <GlobalStyle />
    </>
  );
};

export default App;
