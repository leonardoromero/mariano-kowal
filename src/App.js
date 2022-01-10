import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Admin } from './components/Admin/Admin';
import { Main } from './components/Main';
import { ShowsProvider } from './context/ShowsContext';

function App() {

  

  return (
    <>
    <ShowsProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Main/>}/>
          {/* <Route path='/admin' element={<Admin/>}/> */}
        </Routes>
      </Router>
    </ShowsProvider>
    </>
  );
}

export default App;
