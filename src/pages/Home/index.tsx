/* eslint-disable linebreak-style */
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import concessionaria from '../../../public/concessionaria.jpg';
import concessionaria_2 from '../../../public/concessionaria-2.jpg';
import './styles.css';

export default function Home() {

  return (
    <>
      <Header />
      <div className='flex'>
        <div className='container'>
          <div className="center">
            <img src={concessionaria} alt="Carro Garagem" />
            <div className="middle">
              <a href="/create">Registrar Carro</a>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className="center">
            <img src={concessionaria_2} alt="Carros Garagens" />
            <div className="middle">
              <a href="/list">Listar Carros</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}