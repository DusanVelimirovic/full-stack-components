// Patterns for validation users inputs

export default function Validation(values) {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  // Validate username
  if (!values.username) {
    errors.username = "Username is required!";
  } else if (values.username.length < 2) {
    errors.username = "Username must be at least 2 character long";
  }

  // Validate email
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }
  //Validate password
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 10) {
    errors.password = "Password must be more than 10 characters";
  }

  // validate password confirmation
  if (!values.confirmPassword) {
    errors.confirmPassword = "You need to confirm password";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Password didn't match";
  }

  return errors;
}
