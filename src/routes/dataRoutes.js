import About from "../pages/About";
import { Blog } from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Products from "../pages/Products";

const dataRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  { path: "products", element: <Products /> },
  { path: "about", element: <About /> },
  { path: "blog", element: <Blog /> },
  { path: "contact", element: <Contact /> },
];

export default dataRoutes;
