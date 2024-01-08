import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import logo from '../assets/pawstagram_logo.gif';



function LoginForm({ onLoginSuccess }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('/api/auth/login', {
              email,
              password,
            });

          const data = response.data;

          if (response.status === 200) {

            //storing the token in local storage...for now
            localStorage.setItem('authToken', data.authToken);
            onLoginSuccess(data.authToken);

          }else {
            // handle error
            //we can also show the error message to the user by using alert instead of console.log
            alert(data.message);
          }

        } catch (error) {
          if (error.response) {
          console.log('Login error :', error.response.data);
          alert(error.response.data.message);
          } else {
            console.log('Error during login process :', error.message);
            alert('An error occurred during login, please try again');
        }
        
      }
    }

  return (
<<<<<<< HEAD:pawstagram-app/components/LoginForm.jsx
    <div className="min-h-screen flex items-center justify-center bg-blue-200">
      <div className="max-w-md w-full space-y-8 p-10 bg-red-50 rounded-xl shadow-lg z-10">
=======
    <div className="min-h-screen flex items-center justify-center bg-white">
<<<<<<< HEAD
      <div className="max-w-md w-full space-y-8 p-10 bg-teal-200 rounded-xl shadow-lg z-10">
=======
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
>>>>>>> 0c1aa1e149988cb2c5fa4d44d09c06c04bb767f9:pawstagram-app/src/components/LoginForm.jsx
>>>>>>> 0fee82a26fa45498a1b0a9e07c923af0eb66bcbd
        <div className="text-center">
          <h2 className="italic text-3xl font-bold text-blue-900">
            WELCOME BACK
          </h2>
          <br />
<<<<<<< HEAD:pawstagram-app/components/LoginForm.jsx
          <p className="italic text-blue-600">
            You need to Log in first !
=======
          <p className="mt-2 text-sm text-gray-600">
            You need to Log In first
>>>>>>> 0c1aa1e149988cb2c5fa4d44d09c06c04bb767f9:pawstagram-app/src/components/LoginForm.jsx
          </p>
          <div>
          <br/>
          <img src={logo} alt="Pawstagram logo" className="mx-auto w-32 sm:w-48 md:w-56 lg:w-64 h-auto"/>
          
          <h1 className="text-xl font-bold my-4 text-gray-600">Pawstagram</h1>

          </div>

        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
      
          <input
            type="email"
            name="email"
<<<<<<< HEAD
            className="w-full p-3 border border-gray-300 bg-amber-50 rounded-md"
=======
<<<<<<< HEAD:pawstagram-app/components/LoginForm.jsx
            className="w-full p-3 border border-gray-400 rounded-md"
            placeholder="Username or Email"
=======
            className="w-full p-3 border border-gray-300 rounded-md"
>>>>>>> 0fee82a26fa45498a1b0a9e07c923af0eb66bcbd
            placeholder="Email"
>>>>>>> 0c1aa1e149988cb2c5fa4d44d09c06c04bb767f9:pawstagram-app/src/components/LoginForm.jsx
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
           
          <input
            type="password"
            name="password"
<<<<<<< HEAD
            className="w-full p-3 border border-gray-300 bg-amber-50 rounded-md"
=======
            className="w-full p-3 border border-gray-700 rounded-md bg-sky-500 hover:bg-sky-700"
>>>>>>> 0fee82a26fa45498a1b0a9e07c923af0eb66bcbd
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

        

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-purple-500 focus:ring-indigo-600 border-gray-400 rounded"/>
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900 hover:text-indigo-500">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-teal-200 hover:text-indigo-500 focus-ring-1">
                Forgot your password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center bg-blue-700 hover:bg-blue-800 text-white-w-full py-2 px-3 rounded focus-ring-1"
          >
            Log in
          </button>
        </form>
        <div className="text-center">
          <p className="mt-2 text-sm text-teal-200">
          Don&apos;t have an account?{' '}
<<<<<<< HEAD:pawstagram-app/components/LoginForm.jsx
            <a href="#" className="font-medium text-teal-200 hover:text-indigo-600">
              Register
            </a>
=======
          <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">Register</Link>
>>>>>>> 0c1aa1e149988cb2c5fa4d44d09c06c04bb767f9:pawstagram-app/src/components/LoginForm.jsx
          </p>
        </div>
      </div>
    </div>
    
  );
}



//props validation
LoginForm.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};


export default LoginForm;

