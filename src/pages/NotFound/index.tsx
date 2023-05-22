/* eslint-disable linebreak-style */
import { Container } from 'react-bootstrap';
import Header from '../../components/Header';

export default function NotFound() {
  return (
    <>
      <Header />
      <Container>
        <h1 style={{
          color: 'white',
        }}>Página não encontrada 😟</h1>
      </Container>
    </>
  );
}
