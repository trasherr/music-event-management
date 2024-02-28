import logo from '../logo.svg';
import React from 'react';
import { Outlet, Link } from "react-router-dom";
const Layout: React.FC = () => {
  return (
    <>
    {/* <div className="navbar">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}

    <div>
        header
    </div>
      <Outlet />
    </>
  );
}

export default Layout;
