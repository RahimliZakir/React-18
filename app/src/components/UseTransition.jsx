import React, { useState, useTransition } from "react";

const UseTransition = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [list, setList] = useState([]);

  const [isPending, startTransition] = useTransition();

  const LIST_SIZE = 20000;

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    startTransition(() => {
      const listArray = [];

      for (let i = 0; i < LIST_SIZE; i++) {
        listArray.push(e.target.value);
      }

      setList(listArray);
    });
  };

  return (
    <div>
      <div>
        <input
          value={searchTerm}
          onChange={handleSearch}
          type="text"
          className="form-control"
        />
      </div>
      <div>
        {isPending ? (
          <p>Loading...</p>
        ) : (
          list.map((item, index) => {
            return <p key={index}>{item}</p>;
          })
        )}
      </div>
    </div>
  );
};

export default UseTransition;
