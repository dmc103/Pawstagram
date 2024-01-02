import { useState } from 'react';
import PropTypes from 'prop-types';


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
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Username or Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)} required
            />

            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)} required
            />

            <button type="submit">Log In</button>
        </form>
    </div>
  );
}


export default LoginForm;