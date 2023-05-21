import {ChangeEvent, useState} from 'react';
import * as yup from 'yup';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import InputText from '../../components/InputText';
import * as api from '../../services/api';
import { CreateForm } from '../../components/Interface';
import Header from '../../components/Header';
import {useNavigate} from 'react-router-dom';

interface FormError {
  [k: string]: string;
}

const createSchema = yup.object({
  name: yup.string().required('Campo obrigatório'),
  year: yup.number().min(0).required('Campo obrigatório'),
  price: yup.number().min(0).required('Campo obrigatório'),
  brand: yup.string().required('Campo obrigatório'),
  warranty: yup.string().required('Campo obrigatório'),
  status: yup.string().required('Campo obrigatório'),
  description: yup.string().required('Campo obrigatório'),
});

export default function Create() {
  const navigate = useNavigate();
  const [form, setForm] = useState<CreateForm>({});
  const [formErrors, setFormErrors] = useState<CreateForm>({});

  const onSubmit = async(event: unknown) => {
    (event as SubmitEvent).preventDefault();
    setFormErrors({});
    try {
      const validation = await createSchema.validate(form, {
        abortEarly: false,
      });
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const tempFormErrors: FormError = {}
        err.inner.forEach(i => {
          if (i.path) {
            tempFormErrors[i.path] = i.message;
          }
        });
        setFormErrors(tempFormErrors);
        return;
      } }

    await api.post('/cars', {
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    navigate('/');
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.type);
    if (event.target.type === 'number') {
      setForm({
        ...form,
        [event.target.name]: Number(event.target.value),
      });
      return;
    }
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  console.log(form);

  return (
    <>
      <Header />
    <Container>
      <Form onSubmit={onSubmit}>
        <Container>
          <style type='text/css'>
            {`
              .container {
                  background-color: #212529;
                  padding: 20px;
                  border-radius: 25px;
              }
                `}
          </style>
          <Row>
            <Col>
              <InputText onChange={onChange} placeholder='Fiesta' id='name' label='Nome' description='Nome do carro' />
              <div className='text-danger'>{formErrors.name}</div>
            </Col>
            <Col>
              <InputText onChange={onChange} placeholder='2023' type='number' min={1} id='year' label='Lançamento' description='Data de lançamento' />
              <div className='text-danger'>{formErrors.year}</div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <InputText onChange={onChange} placeholder='Ford' id='brand' label='Marca' description='Marca do carro' />
              <div className='text-danger'>{formErrors.brand}</div>
            </Col>
            <Col>
              <InputText onChange={onChange} placeholder='R$ 20000,00' type='number' min={1} id='price' label='Preço' description='Preço' />
              <div className='text-danger'>{formErrors.price}</div>
            </Col>
            <Col>
              <InputText onChange={onChange} placeholder='2 anos' id='warranty' label='Garantia' description='Garantia' />
              <div className='text-danger'>{formErrors.warranty}</div>
            </Col>
          </Row>
        </Container>
        <Container>
          <InputText onChange={onChange} placeholder='Novo' id='status' label='Estado' description='Estado do carro' />
          <div className='text-danger'>{formErrors.status}</div>
        </Container>
        <Container>
          <InputText onChange={onChange} id='description' label='Descrição' description='Descrição do carro' />
          <div className='text-danger'>{formErrors.description}</div>
        </Container>
        <Button type='submit'>Criar</Button>
      </Form>
    </Container>
    </>
  );
}
