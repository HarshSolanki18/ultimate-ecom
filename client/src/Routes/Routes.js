import Home from "../pages/Landing";
import About from "../pages/About";
import Cart from "../pages/Cart";


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
   {
     path:"/cart",
     sidebarName:"Cart",
     component:Cart,
     icon:"shopping_cart"
   }
];

export default Routes;
