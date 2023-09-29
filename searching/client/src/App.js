import { useEffect, useState } from "react";
import { Users } from "./users"; // Import user information
import "./app.css";
import Table from "./Table";
import axios from "axios";

//////////////////////BASIC SEARCH

function App() {
  // Get and update query
  const [query, setQuery] = useState("");
  return (
    <div className="app">
      {/* Similar to form input */}
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <ul className="list">
        {/* Filter users */}
        {Users.filter((asd) =>
          asd.first_name.toLowerCase().includes(query)
        ).map((user) => (
          /* Allow us to get every user from array */
          <li className="listItem" key={user.id}>
            {user.first_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

///////////////////////SEARCH ON A DATATABLE

// function App() {
//   const [query, setQuery] = useState("");
//   const keys = ["first_name", "last_name", "email"];
//   const search = (data) => {
//     return data.filter((item) =>
//       keys.some((key) => item[key].toLowerCase().includes(query))
//     );
//   };
// return (
//   <div className="app">
//       <input
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />
//     {<Table data={Search(Users)} />}
//   </div>
// );
// }

////////////////////// API SEARCH
/*
function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);

  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      {<Table data={data} />}
    </div>
  );
}*/

export default App;
