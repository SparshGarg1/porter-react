import './About.css';

function About() {

  return (
    <div id="about" >
         {/* About Start */}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6">
                    <div class="row gx-3 h-100">
                        <div class="col-6 align-self-start wow fadeInUp" data-wow-delay="0.1s">
                            <img style={{"height":"400px"}} class="img-fluid" src="assets/img/about-1.jpg"/>
                        </div>
                        <div class="col-6 align-self-end wow fadeInDown" data-wow-delay="0.1s">
                            <img class="img-fluid" src="assets/img/about-2.jpg"/>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <p class="fw-medium text-uppercase fs-1 text-primary mb-2">About Us</p>
                    <h1 class="display-5 mb-4">We Are Leader In Market</h1>
                    <p class="mb-4">
                    Porter is a tech-enabled logistics company offering a variety of intracity and intercity delivery services. Just download and register yourself on the app, choose the service that best 
                    fits yours logistic needs and make your booking! With Porter, you will get a verified driver and vehicle right at your doorstep.
                    </p>
                    <div class="d-flex align-items-center mb-4">
                        <div class="flex-shrink-0 bg-primary p-4">
                            <h1 class="display-2">15</h1>
                            <h5 class="text-white">Years of</h5>
                            <h5 class="text-white">Experience</h5>
                        </div>
                        <div class="ms-4">
                            <p><i class="text-primary me-2 fa fa-home"></i>Home Shifting</p>
                            <p><i class="text-primary me-2 fa fa-building"></i>Corporate Moving</p>
                            <p><i class="fa fa-car text-primary me-2"></i>Vechile Shifting</p>
                            <p><i class="fa fa-map-marker text-primary me-2"></i>Courier Services</p>
                            <p><i class="text-primary me-2 fa fa-car"></i>Car Rental</p>
                        </div>
                    </div>
                    <div class="row pt-2">
                        <div class="col-sm-6">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                    <i class="fa fa-envelope-open text-white"></i>
                                </div>
                                <div class="ms-3">
                                    <p class="mb-2">Email us</p>
                                    <h5 class="mb-0">info@example.com</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                    <i class="fa fa-phone-alt text-white"></i>
                                </div>
                                <div class="ms-3">
                                    <p class="mb-2">Call us</p>
                                    <h5 class="mb-0">+91 982XX-XXXXX</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* About End */}
    </div>
  );
}

export default About;
