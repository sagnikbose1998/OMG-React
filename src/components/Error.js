import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops the page is not loading</h1>
      <h2>
        {err.error.message} : {err.status}
      </h2>
    </div>
  );
};

export default Error;
