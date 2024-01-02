
import LoginForm from '/components/LoginForm';
import './App.css'



function App () {
  const handleLoginSuccess = () => {
      console.log('Login successful!');
  };

  return (
      <div className="App text-center">
      
      <LoginForm onLoginSuccess={handleLoginSuccess} />
      </div>
  );
}

export default App;



