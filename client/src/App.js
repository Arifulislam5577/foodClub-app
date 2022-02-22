import Nav from "./components/Navbar/Nav";
import Home from "./components/Pages/Home/Home";
import Shop from "./components/Pages/Shop/Shop";
import Contact from "./components/Pages/Contact/Contact";
import Login from "./components/Pages/Login/Login";
import Footer from "./components/Footer/Footer";
import CartPage from "./components/Pages/Cart/CartPage";
import Details from "./components/Pages/Details/Details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogDetails from "./components/Pages/BlogDetails/BlogDetails";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/blog" element={<BlogDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
