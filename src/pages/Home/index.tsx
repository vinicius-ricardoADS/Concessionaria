import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Remove from '../../components/Remove';

interface Car {
	id: number;
	name: string;
	year: string;
	price: number;
	currency: string;
	brand: string;
	warranty: string;
}


export default function Home() {

    const [cars, setCars] = useState<Car[]>();

    useEffect (() => {
        fetch('http://localhost:3000/cars', {
            headers: {
                Accept: 'application/json'
            }
        }).then(res => res.json()).then(res => setCars(res));
    }, []);

    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Year</th>
                        <th>Price</th>
                        <th>Currency</th>
                        <th>Brand</th>
                        <th>Warranty</th>
                        <th colSpan={2}>Options</th>
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
                                <td>{car.currency}</td>
                                <td>{car.brand}</td>
                                <td>{car.warranty}</td>
                                <td><Button value={car.id} as='a' href='/create' variant="primary">Edit</Button>{' '}</td>
                                <td><Button onClick={(e) => {
									e.preventDefault();
									Remove(car.id);
								}} value={car.id} as='a' variant="danger">Remove</Button>{' '}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <Spinner animation="border" role="status">
								<span className="visually-hidden">Loading...</span>
							</Spinner>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    );
}
