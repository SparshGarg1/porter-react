import './Footer.css';
import { Link } from 'react-router-dom';
function Footer() {
    const handlebuttons = ()=>
    {
        window.alert("Subscribed to Newsletter Succesfully!");
    }
  return (
    
    <div id="footer" >
        {/* Footer Start */}
        <div class="container-fluid bg-dark footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-white mb-4">Our Office</h5>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 ABC Street, India</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+91 982XX-XXXXX</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                    <div class="d-flex pt-3">
                        <a class="btn btn-square btn-primary rounded-circle me-2" href=""><i
                                class="fab fa-twitter"></i></a>
                        <a class="btn btn-square btn-primary rounded-circle me-2" href=""><i
                                class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-square btn-primary rounded-circle me-2" href=""><i
                                class="fab fa-youtube"></i></a>
                        <a class="btn btn-square btn-primary rounded-circle me-2" href=""><i
                                class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-white mb-4">Quick Links</h5>
                    <a class="btn btn-link"><Link to="/about" style={{"color":"#B0B9AE"}}>About Us</Link></a>
                    <a class="btn btn-link"><Link to="/contact" style={{"color":"#B0B9AE"}}>Contact Us</Link></a>
                    <a class="btn btn-link"><Link to="/service" style={{"color":"#B0B9AE"}}>Our Services</Link></a>
                    <a class="btn btn-link">Terms & Condition</a>
                    <a class="btn btn-link">Support</a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-white mb-4">Business Hours</h5>
                    <p class="mb-1">Monday - Friday</p>
                    <h6 class="text-light">09:00 am - 07:00 pm</h6>
                    <p class="mb-1">Saturday</p>
                    <h6 class="text-light">09:00 am - 12:00 pm</h6>
                    <p class="mb-1">Sunday</p>
                    <h6 class="text-light">Closed</h6>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-white mb-4">Newsletter</h5>
                    <p>Subscribe to our Newsletter!!</p>
                    <div class="position-relative w-100">
                        <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text"
                            placeholder="Your email"/>
                        <button type="button" onClick={handlebuttons}
                            class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Footer End */}


    {/* Copyright Start */}
    <div class="container-fluid copyright bg-dark py-4">
        <div class="container text-center">
            <p class="mb-2">Copyright &copy; <a class="fw-semi-bold" href="#">Porter</a>, All Right Reserved.
            </p>
            {/* HEllo */}
            <p class="mb-0">Designed By <a class="fw-semi-bold" href="https://htmlcodex.com">Sparsh Garg</a>
        </div>
    </div>
    {/* Copyright End */}
    </div>
  );
}

export default Footer;
