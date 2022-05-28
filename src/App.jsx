import "./App.css";
import Navbar from "./component/Navbar";
import Offers from "./component/Offers";
import Restaurants from "./component/Restaurants";
import Filters from "./component/Filters";
import UserInfo  from "../src/Data/UserInfo.json";
import offer from "../src/Data/offer.json"
import restaurent from "../src/Data/restaurent.json"
function App() {
  return (
    <div className="App">
      <Navbar {...UserInfo.location} />
      <Offers offer={offer} />
      <section className="near-you">
        <Filters></Filters>
        <Restaurants restaurent={restaurent} />
      </section>
    </div>
  );
}

export default App;
