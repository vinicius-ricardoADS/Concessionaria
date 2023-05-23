/* eslint-disable linebreak-style */
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import concessionaria from '../../../public/concessionaria.jpg';
import concessionaria_2 from '../../../public/concessionaria-2.jpg';

export default function Home() {

  return (
    <>
      <Header />
      <div className='flex'>
        <div className='right'>
          <a href="/create">
            <img className='w-100' src={concessionaria} alt="" />
          </a>
        </div>
        <div className='left'>
          <a href="/list">
            <img className='w-100' src={concessionaria_2} alt="" />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
