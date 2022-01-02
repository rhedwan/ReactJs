import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/rhedwan";

const MultipleReturns = () => {
  const [isloading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [user, setUser] = useState("Default User");

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setLoading(false);
          setError(true)
          throw Error(response.statusText)
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setLoading(false);
      })
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
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
