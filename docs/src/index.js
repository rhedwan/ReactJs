import React from 'react';
import ReactDOM from 'react-dom';

// Components
import {Counter} from "./topics/useState-Counter"

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Counter/>
  </React.StrictMode>,
  document.getElementById('root')
);
