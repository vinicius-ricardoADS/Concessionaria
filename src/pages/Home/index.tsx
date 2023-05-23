import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container } from 'react-bootstrap';

export default function Home() {

  return (
    <>
      <Header />
      <Container>
        <h1>Bem vindo</h1>
      </Container>
      <Footer />
    </>
  );
}
