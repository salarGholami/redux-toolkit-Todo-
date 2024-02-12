import { useState } from "react";

const AddTodoForm = () => {
  const [value, setValue] = useState("");

  return (
    <form className="form-inline mt-3 mb-4">
      <label htmlFor="name" className="mb-1 text-light">
        Name
      </label>
      <input
        autoComplete="off"
        id="name"
        type="text"
        className="form-control mb-2 mr-sm-2 text-light"
        placeholder="Add todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit" className="btn btn-primary mt-1">
        submit
      </button>
    </form>
  );
};

export default AddTodoForm;
