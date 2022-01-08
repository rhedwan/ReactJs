import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section>
        <div className="container">
          <h3>{people.length} birthday today</h3>
          <List people={people} />
          <button onClick={() => console.log("You clicked me")}>
            Clear All
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
