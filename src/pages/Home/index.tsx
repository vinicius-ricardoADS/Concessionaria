import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Car from '../../components/Interface/Car';
import { get, remove } from '../../services/api';


export default function Home() {

    const [cars, setCars] = useState<Car[]>();

    useEffect (() => {
        get('/cars').then(res => res.json()).then(res => setCars(res));
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
                        <th>Status</th>
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
                                <td>{car.status}</td>
                                <td>{car.brand}</td>
                                <td>{car.warranty}</td>
                                <td><Button value={car.id} as='a' href='/create' variant="primary">Edit</Button>{' '}</td>
                                <td><Button onClick={async (e) => {
									e.preventDefault();
                                    
                                    await remove('/cars', car.id) ? (
                                        get('/cars').then(res => res.json()).then(res => setCars(res))
                                    ) : (
                                        <Spinner animation="border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner>
                                    )
								}} value={car.id} as='a' variant="danger">Remove</Button>{' '}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
							<td colSpan={8}>
								<Spinner animation="border" role="status">
									<span className="visually-hidden">Loading...</span>
								</Spinner>
							</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    );
}
