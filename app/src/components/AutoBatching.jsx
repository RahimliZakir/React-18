import React, { useState } from "react";

const AutoBatching = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState(0);

  console.log("re-render");

  const handleStateChange = () => {
    setTimeout(() => {
      setName("Zakir");
      setSurname("Rahimli");
      setAge(21);
    }, 1000);
  };

  return (
    <div>
      <button onClick={handleStateChange} type="button">
        Click to Change the State
      </button>
    </div>
  );
};

export default AutoBatching;
