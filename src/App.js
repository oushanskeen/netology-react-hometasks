//import logo from './logo.svg';
import "./css/main.css";
import { ShopItemWrap } from "./components/ComponentsLesson/ShopItemWrap.jsx";
//import Calendar from "./components/ComponentsLesson/Calendar";
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";
import { Stars } from "./components/PropsLesson/Stars.jsx";
import { Listing } from "./components/PropsLesson/Listing.jsx";
import { MessageHistory } from "./components/PropsLesson/MessageHistory.jsx";
import {Portfolio} from "./components/EventAndState/Portfolio.jsx";
import {Store} from "./components/EventAndState/Store.jsx";
import {DropdownList} from "./components/EventAndState/DropdownList.jsx";

const App = () => (
  <Router>
    <div className="nav-bar" style={{ display: "flex" }}>
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
      <ul>
        {" "}
        props:
        <li>
          <Link to="/netology-react-hometasks/stars">Stars</Link>
        </li>
        <li>
          <Link to="/netology-react-hometasks/listing">Listing</Link>
        </li>
      </ul>
      <ul>
        {" "}
          events and state:
        <li>
          <Link to="/netology-react-hometasks/portfolio">Portfolio</Link>
         </li>
        <li>
            <Link to="/netology-react-hometasks/store">Store</Link>
         </li>
        <li>DropdownList</li>
      </ul>
    </div>
    <Switch>
      <Route exact path="/netology-react-hometasks/shopitemfunc">
        <ShopItemWrap type="fc" />
      </Route>
      <Route exact path="/netology-react-hometasks/shopitemclass">
        <ShopItemWrap />
      </Route>
      <Route exact path="/netology-react-hometasks/calendar">
        Calendar
      </Route>
      <Route exact path="/netology-react-hometasks/stars">
        <Stars count={3} />
      </Route>
      <Route exact path="/netology-react-hometasks/listing">
        <Listing />
      </Route>
      <Route exact path="/netology-react-hometasks/messagehistory">
        <MessageHistory />
      </Route>
      <Route exact path="/netology-react-hometasks/portfolio">
        <Portfolio/>
      </Route>
      <Route exact path="/netology-react-hometasks/store">
        <Store/>
      </Route>
      <Route exact path="/netology-react-hometasks/dropdown">
        Dropdown
      </Route>
    </Switch>
  </Router>
);

export default App;
