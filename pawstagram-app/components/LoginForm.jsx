import { useState } from 'react';
import PropTypes from 'prop-types';
import logo from '../src/assets/pawstagram_logo.gif';



function LoginForm({ onLoginSuccess }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
            event.preventDefault();
            const credentials = {
                email,
                password
            };
        console.log(credentials);
        onLoginSuccess();

    };
    LoginForm.propTypes = {
        onLoginSuccess: PropTypes.func.isRequired,
      };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            WELCOME BACK
          </h2>
          <br />
          <p className="mt-2 text-sm text-gray-600">
            you need to Log In first
          </p>
          <div>
          <img src={logo} alt="Pawstagram logo" className="mx-auto w-1/4 h-auto"/>
          <h1 className="text-tl font-bold my-4">Pawstagram</h1>

          </div>

        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Username or Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
           
          <input
            type="password"
            name="password"
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

        

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
          >
            Log in
          </button>
        </form>
        <div className="text-center">
          <p className="mt-2 text-sm text-gray-600">
          Don&apos;t have an account?{' '}
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
    
  );
}


export default LoginForm;