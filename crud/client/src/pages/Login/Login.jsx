// Import external Modules
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import FormInput from "../../validation/formInput";


// Import Internal modules
import "./login.css";
import { AuthContext } from "../../context/authContext";

export default function Login() {

   // Collect inputs from Login form
   const [values, setValues] = useState({
    email: "", 
    password: ""
  });


  // Form Inputs
    // Input properties
    const inputs = [
      {
        id: 1,
        name: "email",
        type: "email",
        placeholder: "Email",
        errorMessage: "It should be a valid email address!",
        label: "Email",
        required: true,
      },
      {
        id: 2,
        name: "password",
        type: "password",
        placeholder: "Password",
        label: "Password",
        required: true,
      },
    ];


  // Handle errors from server side
  const [err, setError] = useState(null);



  // Use navigate hook to after succesufull login redirect to home page
  const navigate = useNavigate();


  // Handle changes in form input fields
  // Pass data as callback to setInputs()
  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value}));
  };


  // AuthContext return login()
const { login } = useContext(AuthContext);

const handleLogin = async (e) => {
  e.preventDefault();


    try{
      await login(values); 
      // After succesufull login navigate to home page
      navigate("/");
    } catch (err){
      setError(err.response.data);
    }
};

  return (
    <div className="app">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
          />
        ))}
        {err && err}
        <button>Login</button>
      </form>
      <Link to="/register">
        <button className="loginRegisterButton" >
            Register
        </button>
      </Link>
    </div>
  );
}