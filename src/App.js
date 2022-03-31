import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Form from './form';
import Todo from './todo';
// FORM

function App() {


  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Todo</Link>
              </li>
              <li>
                <Link to="/form">Form</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/form" element={<Form />} />
          </Routes>

        </div>
      </Router>
    </>
  )
}


export default App;
