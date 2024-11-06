import { useState } from 'react';

function Login() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    setIsLogged(prevState => !prevState);
  };

  return (
    <>
      <div className="flex gap-4 items-center"> 
        {isLogged && <p className="text-white">Olá, usuário</p>}  
        <button
          className={`bg-${isLogged ? "black" : "black"} text-${isLogged ? "white" : "white"} px-4 py-1 rounded-md`} 
          onClick={handleLogin} 
        >
          {isLogged ? "Logout" : "Login"}
        </button>
      </div>
    </>
  );
}

export default Login;