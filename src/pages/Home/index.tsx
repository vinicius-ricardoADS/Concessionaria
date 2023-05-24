/* eslint-disable linebreak-style */
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import concessionaria from '../../../public/concessionaria.jpg';
import concessionaria_2 from '../../../public/concessionaria-2.jpg';

import './styles.css';
import {Link} from 'react-router-dom';

export default function Home() {

  return (
    <>
      <Header />
      <div className='flex'>
        <div className='right left-image-block'>
          <Link className='left-image-anchor' to="/create">Inserir carros</Link>
        </div>
        <div className='left right-image-block'>
          <a href="/list">
            <Link className='left-image-anchor' to="/list">Listar carros</Link>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
