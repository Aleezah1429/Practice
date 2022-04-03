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
import Upload from './uploadFile';
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
              <li>
                <Link to="/upload">File Upload</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/form" element={<Form />} />
            <Route path="/upload" element={<Upload />} />
          </Routes>

        </div>
      </Router>
    </>
  )
}


export default App;
