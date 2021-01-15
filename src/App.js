import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MovieMenu from "./components/MovieMenu";
import Player from "./components/Player";

function App() {
  return (
    <Router>
      <div className="App">
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route exact path="/" component={MovieMenu}></Route>
            <Route path="/player/:id" component={Player}></Route>
          </Switch>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
