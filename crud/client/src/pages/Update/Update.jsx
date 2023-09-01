import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {

  // Update current books details
  
  const [currentBook, setCurrentBook] = useState({
    title: "",
    desc: "",
    price: "",
    cover: "",
  });
  
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: "",
    cover: "",
  });

    // Handle errors
    const [error,setError] = useState(false)

    const location = useLocation();
    const navigate = useNavigate();
  
    // Get book ID from url path
    // Alternative to useParams()
    const bookId = location.pathname.split("/")[2];

  //useEffect
  // Access and fetch data from backend api
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/books/${bookId}`);
        setCurrentBook(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBook();

  },[bookId]);



  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8800/api/books/${bookId}`, book);
      navigate("/"); // redirect to Home page
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Update the Book</h1>
      <input
        type="text"
        placeholder={currentBook.title}
        name="title"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder={currentBook.desc}
        name="desc"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder={currentBook.price}
        name="price"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder={currentBook.cover}
        name="cover"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Update</button>
      {error && "Something went wrong!"}
      <Link to="/">See all books</Link>
    </div>
  );
};

export default Update;