import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarson";


const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <React.Fragment>
      <h2>Multiple Returns</h2>
    </React.Fragment>
  );
};

export default MultipleReturns;
