import {Form} from 'react-bootstrap';

export default function Create() {
    return (
        <>
            <Form.Label htmlFor="name">Nome</Form.Label>
            <Form.Control
                id="name"
                aria-describedby="name-help"
            />
            <Form.Text id="name-help" muted>
            Nome do carro
            </Form.Text>
        </>
    );
}
