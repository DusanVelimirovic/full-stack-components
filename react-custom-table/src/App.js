import { useState } from "react";

import "./App.css";
import { Table } from "./components/Table";
import { Modal } from "./components/Modal";

function App() {
  // Env variable with control modal display
  const [modalOpen, setModalOpen] = useState(false);

  // Initial data and set metod (allow us to change the data)
  // setRow is more like halper method passed to handleDelete method
  // Later, we need to replace that with data from DB
  const [rows, setRows] = useState([
    {
      page: "Home",
      description: "This is the main page of the website",
      status: "live",
    },
    {
      page: "About Us",
      description: "This page has details about the company",
      status: "draft",
    },
    {
      page: "Pricing",
      description: "Prices for different subscriptions",
      status: "error",
    },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  // Handle delete row - passed like a prop to the table component
  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  // Handle edit data - in the interface it is pencil in the right hand side
  // This function is passed to table container
  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  // Handle submiting new row - pass function like prop to the modal component
  // Contolling with if-else
  // First case: if we only want to add new row
  // Second case: if we want to edit existing row
  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <div className="App">
      {/* Import table component and pass table component data, and table data methods */}
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />

      {/* add button control modal display */}
      <button onClick={() => setModalOpen(true)} className="btn">
        Add
      </button>

      {/* Import modal component */}
      {/* Conditionaly render the modal */}
      {/* Pass closeModel and defaultValue like props to Modal component */}
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}

export default App;
