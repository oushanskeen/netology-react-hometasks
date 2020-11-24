//import logo from './logo.svg';
import "./css/main.css";
import { ShopItemFuncOutput } from "./components/ShopItem.jsx";
import Calendar from "./components/Calendar";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const App = () => (
  <Router>
    <div className="nav-bar">
      <ul> components:
        <li>
          <Link to="/shopitemfunc">ShopItemFuncOutput</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
      </ul>
    </div>
    <Switch>
      <Route path="/shopitemfunc">
        <ShopItemFuncOutput />
      </Route>
      <Route path="/calendar">
        <Calendar />
      </Route>
    </Switch>
  </Router>
);

export default App;
