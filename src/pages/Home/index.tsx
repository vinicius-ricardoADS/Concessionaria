import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { Car } from '../../types/car';
import { get, remove } from '../../services/api';
import Header from '../../components/Header';
import {useNavigate} from 'react-router-dom';
import swal from '../../lib/swal';


export default function Home() {
  const navigate = useNavigate();
  const [cars, setCars] = useState<Car[]>();

  async function fetchCars() {
    const controller = new AbortController();
    const timeout = setTimeout(() => { 
      swal.fire({
        title: 'Erro',
        icon: 'error',
        text: 'Tempo limite de requisição excedido',
        timer: 1000,
        showConfirmButton: false,
      });

      controller.abort();
    }, 10000);

    try {
      const response = await get('/cars');
      const json = await response.json();

      setCars(json);
    } catch (err) {
      swal.fire({
        title: 'Erro',
        icon: 'error',
        text: 'Não foi possível recuperar os carros do servidor',
        timer: 1000,
        showConfirmButton: false,
      });
    }

    clearTimeout(timeout);
  }

  useEffect (() => {
    fetchCars();
  }, []);

  return (
    <>
      <Header />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>    <th>Id</th>
            <th>Nome</th>
            <th>Ano</th>
            <th>Preço</th>
            <th>Estado</th>
            <th>Marca</th>
            <th>Garantia</th>
            <th>Descrição</th>
            <th colSpan={2}>Opções</th>
          </tr>
        </thead>
        <tbody>
          {cars ? (
            cars.map(car => (
              <tr key={car.id}>
                <td>{car.id}</td>
                <td>{car.name}</td>
                <td>{car.year}</td>
                <td>{car.price}</td>
                <td>{car.status}</td>
                <td>{car.brand}</td>
                <td>{car.warranty}</td>
                <td>{car.description}</td>
                <td><Button onClick={() => {
                  navigate(`/update/${car.id}`);
                }} variant="primary">Editar</Button>{' '}</td>
                <td><Button onClick={async (e) => {
                  await remove('/cars', car.id);
                  fetchCars();
                  swal.fire({
                    title: 'Sucesso!',
                    icon: 'success',
                    text: 'Carro removido',
                    timer: 1000,
                    showConfirmButton: false,
                  });

                }} value={car.id} as='a' variant="danger">Remover</Button>{' '}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={9}>
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <Button onClick={() => {
        navigate('/create');
      }} variant="primary">Criar</Button>
    </>
  );
}
