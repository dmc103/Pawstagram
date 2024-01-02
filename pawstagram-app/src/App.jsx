
import LoginForm from '/components/LoginForm';
import './App.css'

function App () {
  const handleLoginSuccess = () => {
      console.log('Login successful!');
  };

  return (
      <div className="App">
          <h1>Welcome to Pawstagram</h1>
          <LoginForm onLoginSuccess={handleLoginSuccess} />
      </div>
  );
}

export default App;



