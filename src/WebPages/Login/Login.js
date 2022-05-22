import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Login.css"



const Login = () => {

    return (
      <>
     <div className="my-section">
      <div className="login-continer m-2">
        <h1 className='heading-text'>MYBOS</h1>
        <div className="user-container mt-5">
          <form>
            <p className='mytext'>Sign into MYBOS Admin Portal</p>
            <input
              type="email"
              id="fname"
              name="email"
              placeholder="User Email"
              
              required
            />
            <br />
            <input
              type="password"
              id="fname"
              name="Password"
              placeholder="Password"
              
              required
            />
            <br />
           <button>Confirm</button>
          </form>

          <div className="mt-5 password-field">
            <span>Forgot Password?</span> <Link to="/register">Reset</Link>
          </div>
        </div>
      </div>
    </div>
  
    </>
    );
};

export default Login;