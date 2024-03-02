import './App.css';
import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Layout from './components/Layout.tsx';
import ContactPage from './pages/Contact.tsx';
import AboutPage from './pages/About.tsx';
import ServicesPage from './pages/Services.tsx';
import AdminDashboard from './pages/AdminDashboard.tsx';
import Login from './pages/Login.tsx';
import AdminLayout from './components/AdminLayout.tsx';
import NewEvent from './pages/NewEvent.tsx';
import { reactRoutes } from './utils/routes.tsx';
import AuthProvider from './context/AuthContext.tsx';
import AdminProtectedRoute from './guards/AdminProtectedRoute.tsx';

const App: React.FC = () => {

  return (
    <AuthProvider>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={reactRoutes.contact} element={<ContactPage />} />
          <Route path={reactRoutes.about} element={<AboutPage />} />
          <Route path={reactRoutes.services} element={<ServicesPage />} />
        </Route>
        
      </Routes>
        
      
        <Routes>
          <Route path={reactRoutes.admin} element={ <AdminProtectedRoute><AdminLayout /> </AdminProtectedRoute>  } >
          <Route index element={ <AdminDashboard />} />
          <Route path={reactRoutes.adminEvents} element={<NewEvent/>} /> 
          </Route>

        </Routes>

        <Routes>
          <Route path={reactRoutes.auth} element={<Layout />} >
          <Route index element={<Login />} />
          </Route>

        </Routes>
    </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
