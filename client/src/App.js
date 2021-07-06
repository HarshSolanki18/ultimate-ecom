import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import InitialRoutes from "./Routes/Routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
        {
          InitialRoutes.map(route=>(
            <Route exact path={route.path} component={route.component}/>
          ))
        }
        </Switch>
      </div>
    </Router>
  );
}

export default App;
