/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import './App.css';
import Navigation from "./components/Navigation";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
import Packages from "./pages/Packages/Packages";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Home />
  //   }, 
  //   {
  //     path: '/about',
  //     element: <About />
  //   }
  // ])
  return (
    <>
    <Navigation />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/gallery" element={<Gallery />} />
    </Routes>
</>
  )
}

export default App
