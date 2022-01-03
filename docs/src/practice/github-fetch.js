import React, { useState } from "react";

function UserDisplay() {
  const [user, setUser] = useState("");
  const [displayUser, setDisplayUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = (e) => {
    e.preventDefault();
    if (!user) return;
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDisplayUser(data);
        setIsLoading(!isLoading);
      });
  };

  const updateValue = (e) => {
    setUser(e.target.value);
  };

  const Loading = () => {
    return isLoading ? (
      <React.Fragment>
        <img src={displayUser.avatar_url} alt="" />
        <h2>{displayUser.name}</h2>
      </React.Fragment>
    ) : (
      <h1>Nothing to Fectch</h1>
    );
  };

  return (
    <div className="container">
      <h2>Github User</h2>
      <article>
        <form className="form" onSubmit={fetchUser}>
          <div className="form-control">
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={user}
              onChange={updateValue}
            />
          </div>
          <button type="submit">Click</button>
        </form>
      </article>
      <Loading />
    </div>
  );
}

export default UserDisplay;
