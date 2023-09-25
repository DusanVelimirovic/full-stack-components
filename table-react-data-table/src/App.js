import { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

function App() {
  // Define table column
  const column = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Website",
      selector: (row) => row.website,
      sortable: true,
    },
  ];

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setRecords(res.data);
          setFilterRecords(res.data);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  // Update date using state
  const [records, setRecords] = useState([]);
  const [filterRecords, setFilterRecords] = useState([]);

  const handleFilter = (event) => {
    const newData = filterRecords.filter((row) =>
      row.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setRecords(newData);
  };

  return (
    <div>
      <div>
        <input type="text" placeholder="search..." onChange={handleFilter} />
      </div>
      <DataTable
        columns={column}
        data={records}
        pagination
        selectableRows
      ></DataTable>
    </div>
  );
}

export default App;
