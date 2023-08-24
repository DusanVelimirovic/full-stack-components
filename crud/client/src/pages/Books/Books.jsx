import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Books = () => {

  //useState
  // Update state from backend
  const [books, setBooks] = useState([]);

  //useEffect
  // Access and fetch data from backend api
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

  console.log(books);


  return (
    <div>
    <h1>FullStack Crud Component</h1>
    <div className="books">
      {books.map((book) => (
        <div key={book.id} className="book">
          <img src={book.cover} alt="" />
          <h2>{book.title}</h2>
          <p>{book.desc}</p>
          <span>${book.price}</span>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Books