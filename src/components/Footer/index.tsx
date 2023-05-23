import {Link} from 'react-router-dom';
import carLogo from '../../../public/car-logo.svg';
import twitter from '../../../public/twitter-logo.svg';
import instagram from '../../../public/instagram-logo.svg';
import linkedin from '../../../public/linkedin-logo.svg';
import '../Header/styles.css';

export default function Footer() {
  return (
    <footer className="navbar-expand-lg navbar-dark bg-dark fixed-bottom w-100">
      <div className='flex'>
        <Link className="navbar-brand" to="/">
          <div className='flex-logo'>
            <img  src={carLogo} alt="Logo" className='logo-img' />
            <p>Carvest</p>
          </div>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className='navbar-brand'>
          <div>
            <small className="text-center mt-5">&copy; Carvest, 2023. All rights reserved.</small>
          </div>
        </div>
        <div className='flex navbar-brand'>
          <div>
            <Link className="navbar-brand" to="https://www.instagram.com/center_cars_web/">
                <img src={instagram} alt="logo-instagram" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div>
            <Link className="navbar-brand" to="https://www.linkedin.com/in/hdk101/">
                <img src={linkedin} alt="logo-linkedin" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div>
            <Link className="navbar-brand" to="https://twitter.com/Momocromics">
                <img src={twitter} alt="logo-twitter" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}