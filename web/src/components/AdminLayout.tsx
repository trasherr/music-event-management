import React, { useContext } from 'react';
import { Outlet, Link } from "react-router-dom";
import { reactRoutes } from '../utils/routes.tsx';
import { AuthContext } from '../context/AuthContext.tsx';

const AdminLayout: React.FC = () => {

  const context = useContext(AuthContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Concert Crafter</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={reactRoutes.admin}>Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={reactRoutes.adminEvents}>Event</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={context.logout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default AdminLayout;
