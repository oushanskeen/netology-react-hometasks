//import logo from './logo.svg';
import "./css/main.css";
import { ShopItemWrap } from "./components/ComponentsLesson/ShopItemWrap.jsx";
import Calendar from "./components/ComponentsLesson/Calendar";
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";

const App = () => (
  <Router>
    <div className="nav-bar">
      <ul>
        {" "}
        components:
        <li>
          <Link to="/netology-react-hometasks/shopitemfunc">ShopItemFunc</Link>
        </li>
        <li>
          <Link to="/netology-react-hometasks/shopitemclass">
            ShopItemClass
          </Link>
        </li>
        <li>
          <Link to="/netology-react-hometasks/calendar">Calendar</Link>
        </li>
      </ul>
    </div>
    <Switch>
      <Route exact path="/netology-react-hometasks/shopitemfunc">
        <ShopItemWrap type="fc"/>
      </Route>
      <Route exact path="/netology-react-hometasks/shopitemclass">
        <ShopItemWrap />
      </Route>
      <Route exact path="/netology-react-hometasks/calendar">
        <Calendar />
      </Route>
    </Switch>
  </Router>
);

export default App;
