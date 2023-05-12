import './App.css';
import { Routes , Route } from 'react-router-dom';

import Header from './HeaderComponent/Header';
import Banner from './BannerComponent/Banner';
import Nav from './NavComponent/Nav';
import Content from "./ContentComponent/Content";
import Features from './FeaturesComponent/Features'
import Team from './TeamComponent/Team'
import About from './AboutComponent/About';
import Service from './ServiceComponent/Service';
import Footer from './FooterComponent/Footer';
import Register from './RegisterComponent/Register';
import Login from './LoginComponent/Login';
import Contact from './ContactComponent/Contact';
function App() {

  return (
    <div id="container" >
      <Header />
      <Nav />
      <Banner />
      <Routes>
      <Route path="/" element={<Content />} ></Route>
      <Route path="/about" element={<About />} ></Route>
      <Route path="/contact" element={<Contact />} ></Route>
      <Route path="/service" element={<Service />} ></Route>
      <Route path="/register" element={<Register />} ></Route>
      <Route path="/login" element={<Login />} ></Route>
    </Routes>
      
      
    
      
      <Footer />
      
    </div>
  );
}

export default App;