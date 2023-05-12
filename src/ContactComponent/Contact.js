import './Contact.css';

function Contact() {
  const handleSubmit = ()=>
  {
    alert("Contact Form Submitted Successfully!")
  }
  return (
    <div id="contact" class="d-flex align-items-center justify-content-center flex-column">
    {/* Login Start */}
    <p class="fw-medium text-uppercase text-primary fs-1 mb-2">Contact Us</p>
    
    <form>
     <div class="form-group">
     <label for="name">Name:</label>
     <input type="text" class="form-control" id="name" required/>
   </div>
   {/* {email} */}
   <br/>
     <div class="form-group">
     <label for="email">Email address:</label>
     <input type="email" name='email' class="form-control" id="email" required/>
   </div>
   {/* {email} */}
   <br/>
   <div class="form-group">
     <label for="pwd">Phone Number:</label>
     <input type="text" class="form-control" id="phn"/>
   </div>
   {/* {password} */}
   <br/>
   <div class="form-group">
     <label for="pwd">Message:</label>
     <textarea type="text" class="form-control" id="message"/>
   </div>
   {/* {password} */}
   <br/>
   <button onClick={handleSubmit} type="button" class="btn btn-warning">Submit</button>
 </form>
{/* Register End */}
</div>
  );
}

export default Contact;