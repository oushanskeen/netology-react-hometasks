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
          <Link to="/netology-react-hometasks/shopitemfunc">ShopItemFuncOutput</Link>
        </li>
        <li>
          <Link to="/netology-react-hometasks/calendar">Calendar</Link>
        </li>
      </ul>
    </div>
    <Switch>
      <Route exact path="/netology-react-hometasks/shopitemfunc">
        <ShopItemFuncOutput />
      </Route>
      <Route exact path="/netology-react-hometasks/calendar">
        <Calendar />
      </Route>
    </Switch>
  </Router>
);

export default App;
