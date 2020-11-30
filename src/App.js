//import logo from './logo.svg';
import "./css/main.css";
import { ShopItemWrap } from "./components/ComponentsLesson/ShopItemWrap.jsx";
//import Calendar from "./components/ComponentsLesson/Calendar";
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";
import { Stars } from "./components/PropsLesson/Stars.jsx";
import { Listing } from "./components/PropsLesson/Listing.jsx";
import { MessageHistory } from "./components/PropsLesson/MessageHistory.jsx";

const App = () => (
  <Router>
    <div className="nav-bar" style={{display:"flex"}}>
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
      <ul> {" "} props:
        <li>
          <Link to="/netology-react-hometasks/stars">Stars</Link>
        </li>
        <li>
          <Link to="/netology-react-hometasks/listing">Listing</Link>
        </li>
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
        <Stars count={3}/>
      </Route>
      <Route exact path="/netology-react-hometasks/listing">
        <Listing />
      </Route>
      <Route exact path="/netology-react-hometasks/messagehistory">
        <MessageHistory />
      </Route>
    </Switch>
  </Router>
);

export default App;
