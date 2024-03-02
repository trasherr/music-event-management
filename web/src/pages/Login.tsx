import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiRoutes, reactRoutes } from '../utils/routes.tsx';
import { API_ENDPOINT } from '../utils/constants.tsx';
import { AuthContext, AuthContextValue } from '../context/AuthContext.tsx';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login: React.FC = () => {

  const context: AuthContextValue = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors: { email?: string; password?: string } = {};

    if (!email.trim()) {
      validationErrors.email = 'Email is required';
    }
    if (!password.trim()) {
      validationErrors.password = 'Password is required';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Replace with your actual login logic (e.g., API call)
      console.log('Submitting login:', email, password);
      try {
        const response = await axios.post(API_ENDPOINT + apiRoutes.login, {
          email: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.data) {
          console.log('Form data submitted successfully:', response.data);
          setIsSubmitted(true);
          context.login(response.data.token);
          navigate(reactRoutes.admin);
          
          
        } else {
          console.error('Error submitting form:', response.statusText);
          toast.error(response.statusText, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
        }
      } catch (error) {
        toast.error("Login Failed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          });
        console.error('Error submitting form:', error);

        // Handle errors gracefully, e.g., display an error message to the user
      } finally {
        setIsLoading(false);
      }
    }
  };
  return (
    <div
      className="login-container d-flex flex-column justify-content-center align-items-center vh-100"
      style={{ background: 'linear-gradient(to bottom, #f4f4f4, #e3e3e3)' }}
    >
      <ToastContainer />
      <div className="card shadow py-4 px-5">
        <h3 className="card-title text-center mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <div className="text-danger">{errors.password}</div>}
          </div>
          <button disabled={isLoading} type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <div className="mt-3 text-center">
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
