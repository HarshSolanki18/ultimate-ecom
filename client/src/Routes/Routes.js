import Home from "../pages/Landing";
import About from "../pages/About";
import {Home as HomeIcon,Info} from '@material-ui/icons';


const Routes = [
  {
    path: "/",
    sidebarName: "Home",
    component: Home,
    icon:HomeIcon
  },
  { path: "/aboutus", 
    sidebarName: "About", 
    component: About,
    icon:Info 
   },
];

export default Routes;
