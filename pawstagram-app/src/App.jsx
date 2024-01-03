
import LoginForm from '/src/components/LoginForm';




function App () {
  const handleLoginSuccess = () => {
      console.log('Login successful!');
  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-white">
      
      <LoginForm onLoginSuccess={handleLoginSuccess} />
      </div>
  );
}

export default App;



