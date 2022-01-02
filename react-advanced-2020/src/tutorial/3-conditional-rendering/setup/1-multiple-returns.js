import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isloading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((user) => console.log(user))
      .catch((error) => console.log(error));

  }, []);

  if (isloading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Default User</h1>
    </div>
  );
};

export default MultipleReturns;
