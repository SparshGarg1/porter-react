import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {

  return (
    <div id="nav" >
      {/* Navbar Start */}
    <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top py-0 pe-5">
        <a href="index.html" class="navbar-brand ps-5 me-0">
            <h1 class="text-white m-0">Porter</h1>
        </a>
        <button type="button" class="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <a class="nav-item nav-link active"><Link to="/" >Home</Link></a>
                <a class="nav-item nav-link"><Link to="/about" style={{"color":"#02245b"}}>About</Link></a>
                <a class="nav-item nav-link"><Link to="/service" style={{"color":"#02245b"}}>Services</Link></a>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div class="dropdown-menu bg-light m-0">
                        {/* <a  class="dropdown-item">Projects</a> */}
                        <a class="dropdown-item"><Link to="/feature" style={{"color":"#02245b"}}>Features</Link></a>
                        <a class="dropdown-item"><Link to="/team" style={{"color":"#02245b"}}>Our Team</Link></a>
                        {/* <a class="dropdown-item">Testimonial</a>
                        <a class="dropdown-item">404 Page</a> */}
                    </div>
                </div>
                <a class="nav-item nav-link"><Link to="/register" style={{"color":"#02245b"}}>Register</Link></a>
                <a class="nav-item nav-link"><Link to="/login" style={{"color":"#02245b"}}>Login</Link></a>
                <a class="nav-item nav-link"><Link to="/contact" style={{"color":"#02245b"}}>Contact</Link></a>
            </div>
            <a href="" class="btn btn-primary px-3 d-none d-lg-block">Get A Quote</a>
        </div>
    </nav>
    {/* Navbar End */}
    {/* <a><Link to="/" >Home</Link></a>
    <a><Link to="/about" >About</Link></a>
    <a><Link to="/contact" >Contact</Link></a>
    <a><Link to="/service" >Service</Link></a>
    <a><Link to="/register" >Register</Link></a>
    <a><Link to="/login" >Login</Link></a>*/}
    </div> 
  );
}

export default Nav;