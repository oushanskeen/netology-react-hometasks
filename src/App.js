//import logo from './logo.svg';
import "./css/main.css";
import { ShopItemWrap } from "./components/ComponentsLesson/ShopItemWrap.jsx";
//import Calendar from "./components/ComponentsLesson/Calendar";
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";
import { Stars } from "./components/PropsLesson/Stars.jsx";
import { Listing } from "./components/PropsLesson/Listing.jsx";
import { MessageHistory } from "./components/PropsLesson/MessageHistory.jsx";
import { Portfolio } from "./components/EventAndState/Portfolio.jsx";
import { Store } from "./components/EventAndState/Store.jsx";
import { Converter } from "./components/Forms/RgbToHex.jsx";
import { FitnessTracker } from "./components/Forms/FitnessTracker.jsx";
import { Yandex } from "./components/Decomposition/Yandex.jsx";
import { Cards } from "./components/Decomposition/Cards.jsx";
import { Worldtime } from "./components/CompLifeAndHTTP/Worldtime.jsx";
import { Crud } from "./components/CompLifeAndHTTP/Crud";
import { PrettyDate } from "./components/HOC/PrettyDate";
import { Popularnew } from "./components/HOC/Popularnew.jsx";

const App = () => (
  <Router>
    <div className="nav-bar" style={{ display: "flex", paddingLeft:100, margin:0 }}>
      <ul>
        {" "}
        lifetime and HTTP:
        <li>
          <Link to="/netology-react-hometasks/worldtime">
            Worldtime
          </Link>
        </li>
        <li>
          <Link to="/netology-react-hometasks/crud">
            Crud
          </Link>
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
        <Stars count={3} />
      </Route>
      <Route exact path="/netology-react-hometasks/listing">
        <Listing />
      </Route>
      <Route exact path="/netology-react-hometasks/messagehistory">
        <MessageHistory />
      </Route>
      <Route exact path="/netology-react-hometasks/portfolio">
        <Portfolio />
      </Route>
      <Route exact path="/netology-react-hometasks/store">
        <Store />
      </Route>
      <Route exact path="/netology-react-hometasks/dropdown">
        Dropdown
      </Route>
      <Route exact path="/netology-react-hometasks/converter">
        <Converter />
      </Route>
      <Route exact path="/netology-react-hometasks/fitnesstracker">
        <FitnessTracker />
      </Route>
      <Route exact path="/netology-react-hometasks/cards">
        <Cards />
      </Route>
      <Route exact path="/netology-react-hometasks/yandex">
        <Yandex />
      </Route>
      <Route exact path="/netology-react-hometasks/worldtime">
        <Worldtime />
      </Route>
      <Route exact path="/netology-react-hometasks/crud">
        <Crud/> 
      </Route>
    </Switch>
  </Router>
);

export default App;
