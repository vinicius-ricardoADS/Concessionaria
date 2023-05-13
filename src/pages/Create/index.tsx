import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import InputText from '../../components/InputText';

export default function Create() {
    const onSubmit = (event: unknown) => {
        (event as SubmitEvent).preventDefault();
        console.log('hello');
    };

    return (
        <Form onSubmit={onSubmit}>
            <Container>
              <Row>
                <Col>
                  <InputText placeholder='Fiesta' id='name' label='Nome' description='Nome do carro' />
                </Col>
                <Col>
                  <InputText placeholder='2023' type='number' min={1} id='year' label='Lançamento' description='Data de lançman' />
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col>
                  <InputText placeholder='Ford' id='brand' label='Marca' description='Marca do carro' />
                </Col>
                <Col>
                  <InputText placeholder='R$ 20000,00' type='number' min={1} id='price' label='Preço' description='Preço' />
                </Col>
                <Col>
                  <InputText placeholder='2 anos' id='warranty' label='Garantia' description='Garantia' />
                </Col>
              </Row>
            </Container>
            <Container>
              <InputText placeholder='Novo' id='status' label='Estado' description='Estado do carro' />
            </Container>
            <Container>
              <InputText id='description' label='Descrição' description='Descrição do carro' />
            </Container>
            <Button type='submit'>Criar</Button>
        </Form>
    );
}
