import React, { useState } from "react";

import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  
  // Use to pass data to the modal form inputs and update data
  const [formState, setFormState] = useState(
    defaultValue || {
      page: "",
      description: "",
      status: "live",
    }
  );
  const [errors, setErrors] = useState("");

  // Helper function use to validate the form data
  const validateForm = () => {
    if (formState.page && formState.description && formState.status) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  // Collect data from form inputs when user is typing
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  // Controll handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Just return if we have some error
    if (!validateForm()) return;

    // Pass form data
    onSubmit(formState);

    closeModal(); // Close the modal
  };

  return (
    /* Modal container */
    /* Control displaing modal */
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      {/* Modal */}
      <div className="modal">
        
        {/* Compose from different form group */}
        <form>
          <div className="form-group">
            <label htmlFor="page">Page</label>
            <input name="page" onChange={handleChange} value={formState.page} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              onChange={handleChange}
              value={formState.description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              onChange={handleChange}
              value={formState.status}
            >
              <option value="live">Live</option>
              <option value="draft">Draft</option>
              <option value="error">Error</option>
            </select>
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};