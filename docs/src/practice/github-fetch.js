import React, { useState } from "react";

function UserDisplay() {
  const [user, setUser] = useState("");
  //   https://api.github.com/users/
  const fetchUser = () => {};
  
  const updateValue = (e) => {
    setUser(e.target.value);
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
    </div>
  );
}

export default UserDisplay;
