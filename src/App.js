import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Contact from './components/ContactMe/Contact';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Blog from './components/Blog/Blog';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/blog">
          <Blog></Blog>
        </Route>
        <Route path="*">
          <h3 className="text-center">404 Not Found, Invalid path</h3>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
