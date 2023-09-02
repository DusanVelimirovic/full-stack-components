import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";


const Books = () => {
  const books = useSelector((state) => state.books);
  console.log(books);

  //useState
  // Update state from backend
  /*
  const [books, setBooks] = useState([]);
  */

  //useEffect
  // Access and fetch data from backend api
  /*
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);
  */

  // Delete book from DB
  /*
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/api/books/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };
  */



  return (
    <div>
    <h1>FullStack Crud Component</h1>
    <div className="books">
      TEST
      {
        /*
                {books.map((book) => (
        <div key={book.id} className="book">
          <img src={book.cover} alt="" />
          <h2>{book.title}</h2>
          <p>{book.desc}</p>
          <span>${book.price}</span>
          <button className="read" onClick={() => handleDelete(book.id)}>Delete</button>
          <button className="update">
            <Link
              to={`/update/${book.id}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Update
            </Link>
           </button>
           <button className="read">
            <Link
              to={`/read/${book.id}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Read
            </Link>
           </button>
        </div>
      ))}
        */
      }

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