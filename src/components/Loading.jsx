import React from "react";
import Skeleton from "react-loading-skeleton";

import "../App.css";

const Loading = () => {
  return (
    <div className="skeleton">
      <Skeleton count={2} />
      <Skeleton height={100} />
      <Skeleton height={100} />
    </div>
  );
};

export default Loading;
