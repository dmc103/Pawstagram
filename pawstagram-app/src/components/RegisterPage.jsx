import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
    const [ email, setEmail ] = useState('');
    const [ userName, setUserName ] = useState('');
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState ('')


    const handleSubmit = async(event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match, try again");
            return;
        }

        axios.post('/register', {
            email,
            userName,
            firstName,
            lastName,
            password,
            confirmPassword
        })
        .then((response) => {
            console.log(response.data);
            //will refer the user later to their account page
            //still to build the account page
            //be-right-back.... :)

        })


        .catch((err) => {
            console.log(err);
        })
    };




  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          PLEASE REGISTER HERE
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="username"
              name="username"
              id="username"
              className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />

            <input
              type="firstname"
              name="firstname"
              id="firstname"
              className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />

            <input
              type="lastname"
              name="lastname"
              id="lastname"
              className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
             
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />


            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Have an account? 
                  <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Log In</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

  )
}

export default RegisterPage