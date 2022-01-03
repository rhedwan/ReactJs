import React, { useState } from "react";

function UserDisplay() {
  return (
    <div className="container">
      <h2>Github User</h2>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="userName">Username</label>
            <input type="text" id="userName" name="userName" />
          </div>
          <button type="submit">Click</button>
        </form>
      </article>
    </div>
  );
}

export default UserDisplay;
