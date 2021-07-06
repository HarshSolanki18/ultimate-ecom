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
          InitialRoutes.map((route,key)=>(
            <Route exact path={route.path} component={route.component} key={key}/>
          ))
        }
        </Switch>
      </div>
    </Router>
  );
}

export default App;
