//* useDeferredValue() does the same thing as useTransition(), making a slow and laggy interface faster. However, it is used in a slightly different way. According to React team member Dan Abramov, useDeferredValue() is mainly

//* useful when the value comes “from above” and you don’t actually have control over the corresponding setState call.

import React, { useState, useDeferredValue, useMemo } from "react";

const UseDeferredValue = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          className="form-control"
        />
      </div>
      <List input={searchTerm} />
    </div>
  );
};

export default UseDeferredValue;

const List = ({ input }) => {
  const defferedInput = useDeferredValue(input);

  const LIST_SIZE = 20000;

  const list = useMemo(() => {
    const listArray = [];

    for (let i = 0; i < LIST_SIZE; i++) {
      listArray.push(defferedInput);
    }

    return listArray;
  }, [defferedInput]);

  return (
    <div>
      {list.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
};
