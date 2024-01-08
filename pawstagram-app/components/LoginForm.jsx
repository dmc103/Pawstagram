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
    <div className="min-h-screen flex items-center justify-center bg-blue-200">
      <div className="max-w-md w-full space-y-8 p-10 bg-red-50 rounded-xl shadow-lg z-10">
        <div className="text-center">
          <h2 className="italic text-3xl font-bold text-blue-900">
            WELCOME BACK
          </h2>
          <br />
          <p className="italic text-blue-600">
            You need to Log in first !
          </p>
          <div>
          <img src={logo} alt="Pawstagram logo" className="mx-auto w-32 sm:w-24 md:w-20 lg:w-16 h-auto"/>
          <h1 className="text-tl font-bold my-4">Pawstagram</h1>

          </div>

        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
      
          <input
            type="email"
            name="email"
            className="w-full p-3 border border-gray-400 rounded-md"
            placeholder="Username or Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
           
          <input
            type="password"
            name="password"
            className="w-full p-3 border border-gray-700 rounded-md bg-sky-500 hover:bg-sky-700"
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
            <a href="#" className="font-medium text-teal-200 hover:text-indigo-600">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
    
  );
}


export default LoginForm;