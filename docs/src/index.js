import React from 'react';
import ReactDOM from 'react-dom';

// Components
// import {Counter} from "./topics/useState-Counter"
import GithubFetch from "./practice/github-fetch";

import './index.css';
import "./style.css";

ReactDOM.render(
  <React.StrictMode>
    <GithubFetch />
  </React.StrictMode>,
  document.getElementById("root")
);
