import './Login.css';
function Login() {
  const handleSubmit = ()=>
  {
    alert("Login Failed")
  }
  return (
    <div id="login" class="d-flex align-items-center justify-content-center flex-column">
         {/* Login Start */}
         <p class="fw-medium text-uppercase text-primary fs-1 mb-2">Login Here!!</p>
         
         <form>
          <div class="form-group">
          <label for="email">Email address:</label>
          <input type="email" class="form-control" id="email"/>
        </div>
        {/* {email} */}
        <br/>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input type="password" class="form-control" id="pwd"/>
        </div>
        {/* {password} */}
        <br/>
        <button onClick={handleSubmit} type="button" class="btn btn-warning">Submit</button>
      </form>
    {/* Register End */}
    </div>
  );
}

export default Login;
