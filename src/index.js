import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import Navbar from './components/Navbar';
import './index.css';

import About from './pages/About';
import NoMatch from './pages/NoMatch';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/to-do-list-react/list"
          element={<TodoContainer />}
        />
        <Route path="/to-do-list-react/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
