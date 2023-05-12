import './Register.css';
import { useState } from 'react';
function Register() {
  const [output, setOutput] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [gender, setGender] = useState();
  const handleSubmit = ()=>
  {
    setName("");
    setEmail("");
    setPassword("");
    setMobile("");
    setAddress("");
    setCity("");
    setOutput("form submitted successfully");
  }
  return (
    <div id="Register" class="d-flex align-items-center justify-content-center flex-column">
         {/* Register Start */}
         <h1 >Register Here!!!</h1><br/>
         <span>{output}</span>
         <form>
          <div class="form-group">
          <label for="email">Email address:</label>
          <input type="email" class="form-control" id="email" value={email} onChange={e=> setEmail(e.target.value)}/>
        </div>
        {/* {email} */}
        <br/>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input type="password" class="form-control" id="pwd"value={password} onChange={e=> setPassword(e.target.value)}/>
        </div>
        {/* {password} */}
        <br/>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" class="form-control" id="name" value={name} onChange={e=> setName(e.target.value)}/>
        </div>
        {/* {Name}*/}
        <br/>
        <div class="form-group">
          <label for="name">Mobile:</label>
          <input type="text" class="form-control" id="mobile" value={mobile} onChange={e=> setMobile(e.target.value)}/>
        </div>
        {/* {Name}*/}
        <br/>
        <div class="form-group">
          <label for="address">Address:</label>
          <textarea class="form-control" id="address" value={address} onChange={e=> setAddress(e.target.value)}></textarea>
        </div>
        {/* {address}*/}
        <br/>
        <div class="form-group">
          <label for="city">City:</label>
          <select type="text" class="form-control" id="city" value={city} onChange={e=> setCity(e.target.value)}>
            <option>Select City</option>
            <option>Indore</option>
            <option>Bhopal</option>
            <option>Ujjain</option>
          </select>
        </div>
        {/* {City}*/}
        <br/>
        <div class="form-group">
          <label for="Gender">City:</label>
          <select type="text" class="form-control" id="gender" value={gender} onChange={e=> setGender(e.target.value)}>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
        </div>
        {/* {City}*/}
        <br/>
        <button onClick={handleSubmit} type="button" class="btn btn-warning">Submit</button>
      </form>
    {/* Register End */}
    </div>
  );
}

export default Register;