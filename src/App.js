import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Switch from "react-switch";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
