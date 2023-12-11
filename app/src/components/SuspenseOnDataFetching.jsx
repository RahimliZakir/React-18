import React, { Suspense } from "react";

import { fetchData } from "../api/fetchData";

const SuspenseOnDataFetching = () => {
  return (
    <div className="d-flex">
      <div className="col-6 d-flex flex-column align-items-end">
        <div>
          <h2>Country List</h2>
          <Suspense fallback={<p>Loading Country List...</p>}>
            <CountryList />
          </Suspense>
        </div>
      </div>
      <div className="col-6">
        <div>
          <h2>Time in Baku</h2>
          <Suspense fallback={<p>Loading Time...</p>}>
            <Time />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default SuspenseOnDataFetching;

//* 1st) Fetch Country List data
const countryResource = fetchData(process.env.REACT_APP_COUNTRIES_API_URL);

const CountryList = () => {
  const countries = countryResource.read();

  return (
    <>
      {countries.map((item) => {
        return <p key={item.cca2}>{item.name.common}</p>;
      })}
    </>
  );
};

//* 2nd) Fetch Time data
const timeResource = fetchData(process.env.REACT_APP_TIME_API_URL);

const Time = () => {
  const time = timeResource.read();

  return (
    <p>
      {time.timezone} {time.utc_datetime}
    </p>
  );
};
