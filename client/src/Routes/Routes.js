import Home from "../pages/Landing";
import About from "../pages/About";


const Routes = [
  {
    path: "/",
    sidebarName: "Home",
    component: Home,
    icon:"home"
  },
  { path: "/aboutus", 
    sidebarName: "About", 
    component: About,
    icon:"info"
   },
];

export default Routes;
