import React from "react";

const TodoFilterForm = ({
  name,
  setName,
  completedCheckbox,
  setCompletedCheckbox,
}) => {
  return (
    <div className="filter-form">
      <div className="filter-form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <label>
        <input
          type="checkbox"
          checked={completedCheckbox}
          onChange={(e) => setCompletedCheckbox(e.target.checked)}
        />
        Hide Completed
      </label>
    </div>
  );
};

export default TodoFilterForm;
