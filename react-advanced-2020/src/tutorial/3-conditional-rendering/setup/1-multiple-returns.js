import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/rhedwan";

const MultipleReturns = () => {
  const [isloading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [user, setUser] = useState({ defaultUser: "Default User" });

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
      .then((userRes) => {
        setUser({...userRes, user});
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
    <div className="users">
      <h1>{user.defaultUser}</h1>
      <img src={user.avatar_url} alt="" />
      <h4>{user.name}</h4>
    </div>
  );
};

export default MultipleReturns;
