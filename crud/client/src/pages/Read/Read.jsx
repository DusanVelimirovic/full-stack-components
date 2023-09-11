import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BookAPI } from "../../apis/apiBooks";

const Books = () => {

  const location = useLocation();

  //useState
  // Update state from backend
  const [book, setBook] = useState([]); 

  // Get book ID from url path
  // Alternative to useParams()
  const bookId = location.pathname.split("/")[2];

  // Get Book data
  useEffect( () => {
    BookAPI.get(bookId)
    .then((book) => {
      setBook(book.data[0]);
    })
    .catch((err) => {
      console.log("Error-" + err); //err.message
    })
  }, []);

  return (
    <div>
    <h1>{book.title}</h1>
    <div className="books">
      {
        <div key={book.id} className="book">
          <img src={book.cover} alt="" />
          <h2>{book.title}</h2>
          <p>{book.desc}</p>
          <span>${book.price}</span>
        </div>
      }
    </div>
  </div>
  )
}

export default Books