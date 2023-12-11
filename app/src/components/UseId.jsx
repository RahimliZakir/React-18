import React, { useId } from "react";

const UseId = () => {
  const id = useId();

  return (
    <form>
      <label htmlFor={id} className="form-check-label">
        Do you like React?
      </label>
      <input id={id} type="checkbox" className="form-check-input" />
    </form>
  );
};

export default UseId;
