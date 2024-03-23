 import { Link } from 'react-router-dom';
 import './navbar.css';
export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="nav-buttons">
        <Link to="/login" className="nav-button">Login</Link>
        <Link to="/cadastro" className="nav-button">Cadastro</Link>
      </div>
    </nav>
  );
};




