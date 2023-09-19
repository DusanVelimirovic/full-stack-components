// Import internal modules
import "./register.css";
import FormInput from "../../validation/formInput";

// Import external Modules
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
 
export default function Register() {

// Collect data from input fields
const [values, setValues] = useState({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
});

console.log(values.password)
console.log(values.confirmPassword)


  // Form Input properties
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];


// Handle errors from server side
const [err, setError] = useState(null);

// Use navigate hook to after succesufull registration redirect to login page
const navigate = useNavigate();

// Collect changes in form input fields
// Pass data as callback to setInputs()
const handleChange = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value });

};

// Handle register request using axios
const handleRegister = async e => {
  e.preventDefault();

  const { confirmPassword, ...others } = values;


  // Send Register API request
    try {
      await axios.post("http://localhost:8800/api/auth/register", others);
      navigate("/login");
    }
  
    catch (err){
     setError(err.response.data);
    }
}


  return (
    <div className="app">
      <form onSubmit={handleRegister}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
          />
        ))}
        {err && err}
        <button>Register</button>
      </form>
    </div>
  );
}