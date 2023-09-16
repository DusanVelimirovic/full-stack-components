import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BookAPI } from "../../apis/apiBooks";
import axios from "axios";


const Books = () => {

  //useState
  // Update state from backend
  const [books, setBooks] = useState([]);


  // Fetch all book from DB
  useEffect( () => {
    BookAPI.getAll()
    .then((books) => {
      console.log("Books", books.data)
      setBooks(books.data);
    })
    .catch((err) => {
      console.log("Error-" + err); //err.message
    })
  }, []);

 // Delete book from DB
 const handleDelete = (id) => {
  try{
    BookAPI.delete(id);
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
 }

 // Handle Logout
 const handleLogout = () => {

      axios.get("http://localhost:8800/api/auth/logout")
      .then(res => {
        localStorage.clear();
        window.location.reload();
      }).catch(err => console.log(err));

 }






  return (
    <div>
    <h1>FullStack Crud Component</h1>
        <button className="loginRegisterButton" onClick={handleLogout} >
            Logout
        </button>
    <div className="books">
      {books.map((books) => (
        <div key={books.id} className="book">
          <img src={books.cover} alt="" />
          <h2>{books.title}</h2>
          <p>{books.desc}</p>
          <span>${books.price}</span>
          <button className="read" onClick={() => handleDelete(books.id)}>Delete</button>
          <button className="update">
            <Link
              to={`/update/${books.id}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Update
            </Link>
           </button>
           <button className="read">
            <Link
              to={`/read/${books.id}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Read
            </Link>
           </button>
        </div>
      ))}
    </div>
    <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new book
        </Link>
    </button>

  </div>
  )
}

export default Books