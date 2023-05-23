/* eslint-disable linebreak-style */
import {Link} from 'react-router-dom';
import carLogo from '../../../public/car-logo.svg';
import './styles.css';

export default function Header() {
  return (
    <nav className="w-100 navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={carLogo} alt="Logo" className='logo-img' />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/create">Criar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/list">Listar</Link>
            </li>
          </ul>
        </div>
        */
      </div>
    </nav>
  );
}
