export const wrapPromise = (promise) => {
  //* Set initial status
  let status = "pending";
  //* Store result
  let result;
  //* Wait for the promise
  let suspender = promise.then(
    (resp) => {
      status = "fulfilled";
      result = resp;
    },
    (err) => {
      status = "rejected";
      result = err;
    }
  );

  return {
    //* We also can write like these.
    // read(){}
    read: () => {
      if (status === "pending") {
        throw suspender;
      } else if (status === "rejected") {
        throw result;
      } else if (status === "fulfilled") {
        return result;
      }
    },
  };
};
