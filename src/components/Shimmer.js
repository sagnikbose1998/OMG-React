import React from "react";
import Skeleton from "react-loading-skeleton";

const Shimmer = () => {
  return (
    <div>
      <h1>
        <Skeleton width={200} />
      </h1>
      <p>
        <Skeleton count={5} />
      </p>
    </div>
  );
};

export default Shimmer;
