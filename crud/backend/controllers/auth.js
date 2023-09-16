// Controller function to handle request via auth route

// Import external modules
import bcrypt from "bcryptjs";
import { db } from "../connection.js";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  // Check if User exist
  // DB Query
  const q = "SELECT * FROM users WHERE username = ?";

  // Send Query to DB
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exist");

    // Create new user
    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    // Create User
    const q = "INSERT INTO users (`username`,`email`, `password`) VALUE (?)";

    const values = [req.body.username, req.body.email, hashedPassword];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created");
    });
  });
};

export const login = (req, res) => {
  // Check if User exist
  const q = "SELECT * FROM users WHERE email = ?";

  // Return user as an array[](data)
  db.query(q, [req.body.email], (err, data) => {
    // If user not exist in DB
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    // If user exist check password
    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!checkPassword)
      return res.status(400).json("Ouups, wrong password or email");

    // Create JWT
    // Used this token after user is logged in
    // Send this token with cookie
    const token = jwt.sign({ id: data[0].id }, "secretkey");

    // Destructure user object so after logged in cookie we will get all information about user except password
    const { password, ...others } = data[0];

    // Send token and user in with cookie in response object
    res
      .cookie("accessToken", token, {
        httpOnly: true, // This means that random scripts can't use our cookie
      })
      .status(200)
      .json(others);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      httpOnly: true,
    })
    .status(200)
    .json({ Status: "Success" });
};
