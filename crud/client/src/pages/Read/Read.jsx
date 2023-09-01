import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Books = () => {

    const location = useLocation();
    const navigate = useNavigate();

  //useState
  // Update state from backend
  const [book, setBook] = useState([]);

    // Get book ID from url path
    // Alternative to useParams()
const bookId = location.pathname.split("/")[2];

  //useEffect
  // Access and fetch data from backend api
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/books/${bookId}`);
        setBook(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBook();

  },[bookId]);

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