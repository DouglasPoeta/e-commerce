// login.tsx
import { useState } from "react";
import axios from "axios";
import "./style.css";
 
export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", senha: "" });
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        credentials
      );
      console.log(response.data);
    } catch (error) {
      setError("Usuário ou senha incorretos");
    }
  };

  return (
    <>
      <div className="login-container">
        <h1>Login</h1>
        <div className="login-form">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={credentials.senha}
            onChange={handleInputChange}
          />
          <button onClick={handleLogin}>Login</button>
          {error && <p className="login-error">{error}</p>}
        </div>
      </div>
    </>
  );
}
