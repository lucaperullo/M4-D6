import "bootstrap/dist/css/bootstrap.min.css";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";

import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <NavBar
        title="Strivestaurant"
        links={["Home", "Contacts", "Location", "blabla", "Alfredo"]}
      />
      <Home newTitle="Amatriciana" NewPayoff="Paid" />
    </div>
  );
}

export default App;
