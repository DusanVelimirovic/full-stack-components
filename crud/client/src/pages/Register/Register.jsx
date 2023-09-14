// Import internal modules
import "./register.css";
import Validation from "../../validation.js";

// Import external Modules
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
 
export default function Register() {

// Collect data from input fields
const [inputs, setInputs] = useState({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
});


// Handle errors during register
const [formErrors, setFormErrors] = useState({});

// Handle errors from server side
const [err, setError] = useState(null);

// Use navigate hook to after succesufull registration redirect to login page
const navigate = useNavigate();

// Collect changes in form input fields
// Pass data as callback to setInputs()
const handleChange = (e) => {
  setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value}));

};

// Handle register request using axios
const handleClick = async e => {
  e.preventDefault();

  setFormErrors(Validation(inputs));

  const { confirmPassword, ...others } = inputs;


  // Send API request only if formErrors are empty
  

  if(formErrors.username !== undefined && formErrors.email !== undefined && formErrors.password !== undefined) {
    try {
      await axios.post("http://localhost:8800/api/auth/register", others);
      navigate("/login");
    }
  
    catch (err){
     setError(err.response.data);
    }
  }






}


  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          name="username"  
          onChange={handleChange}
        />
        <p> {formErrors.username} </p>
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          name="email"  
          onChange={handleChange}
        />
        <p> {formErrors.email} </p>
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          name="password"  
          onChange={handleChange}
        />
        <p> {formErrors.password} </p>
        <label>Confirm Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Confirm your password..."
          name="confirmPassword"  
          onChange={handleChange}
        />
        <p> {formErrors.confirmPassword} </p>
        <button className="registerButton" onClick={handleClick}>
          Register
        </button>
        <p> {err && err} </p>
      </form>

    </div>
  );
}