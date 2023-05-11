import Table from "react-bootstrap/Table"
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'

export default function Home() {

	interface Car {
		id: number;
		name: string;
		year: string;
		price: number;
		currency: string;
		brand: string;
		warranty: string;
	}

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
						<td><Button variant="primary">Edit</Button>{' '}</td>
						<td><Button variant="danger">Remove</Button>{' '}</td>
					</tr>
				))
			) : (
				<tr>
					<td colSpan={7}>Loading...</td>
				</tr>
			)}
		</tbody>
		</Table>
	</>
  );
}