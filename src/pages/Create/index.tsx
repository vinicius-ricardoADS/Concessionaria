/* eslint-disable linebreak-style */
import {ChangeEvent, useState, useEffect} from 'react';
import * as yup from 'yup';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import InputText from '../../components/InputText';
import * as api from '../../services/api';
import { CreateCarForm } from '../../types/car';
import Header from '../../components/Header';
import {useNavigate, useParams} from 'react-router-dom';
import Footer from '../../components/Footer';
import swal from '../../lib/swal';

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
  const [form, setForm] = useState<CreateCarForm>({});
  const [formErrors, setFormErrors] = useState<FormError>({});
  const { id } = useParams<{ id : string}>();
  const isEditing = !!id;

  useEffect(() => {
    const getCar = async () => {
      try {
        const response = await api.get(`/cars/${id}`);
        const car = await response.json();
        setForm(car);
      } catch (error) {
        console.log(error);
      }
    };

    getCar();
  }, [id]);

  const onSubmit = async(event: unknown) => {
    (event as SubmitEvent).preventDefault();
    setFormErrors({});
    try {
      await createSchema.validate(form, {
        abortEarly: false,
      });
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const tempFormErrors: FormError = {};
        err.inner.forEach(i => {
          if (i.path) {
            tempFormErrors[i.path] = i.message;
          }
        });
        setFormErrors(tempFormErrors);
        return;
      } }
    if (id) {
      await api.put('/cars', parseInt(id), {
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json'
        },
      });
      swal.fire({
        title: 'Sucesso!',
        icon: 'success',
        text: 'Um carro foi editado',
        timer: 1000,
        showConfirmButton: false,
      });
    } else {
      await api.post('/cars', {
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json'
        },
      });

      swal.fire({
        title: 'Sucesso!',
        icon: 'success',
        text: 'Um carro foi adicionado',
        timer: 1000,
        showConfirmButton: false,
      });
    }
    navigate('/list');
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
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
                <InputText value={isEditing ? form.name : undefined} onChange={onChange} placeholder='Fiesta' id='name' label='Nome' description='Nome do carro' />
                <div className='text-danger'>{formErrors.name}</div>
              </Col>
              <Col>
                <InputText value={isEditing ? form.year : undefined} onChange={onChange} placeholder='2023' type='number' min={1} id='year' label='Lançamento' description='Data de lançamento' />
                <div className='text-danger'>{formErrors.year}</div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col>
                <InputText value={isEditing ? form.brand : undefined} onChange={onChange} placeholder='Ford' id='brand' label='Marca' description='Marca do carro' />
                <div className='text-danger'>{formErrors.brand}</div>
              </Col>
              <Col>
                <InputText value={isEditing ? form.price : undefined} onChange={onChange} placeholder='R$ 20000,00' type='number' min={1} id='price' label='Preço' description='Preço' />
                <div className='text-danger'>{formErrors.price}</div>
              </Col>
              <Col>
                <InputText value={isEditing ? form.warranty : undefined} onChange={onChange} placeholder='2 anos' id='warranty' label='Garantia' description='Garantia' />
                <div className='text-danger'>{formErrors.warranty}</div>
              </Col>
            </Row>
          </Container>
          <Container>
            <InputText value={isEditing ? form.status : undefined} onChange={onChange} placeholder='Novo' id='status' label='Estado' description='Estado do carro' />
            <div className='text-danger'>{formErrors.status}</div>
          </Container>
          <Container>
            <InputText value={isEditing ? form.description : undefined} onChange={onChange} id='description' label='Descrição' description='Descrição do carro' />
            <div className='text-danger'>{formErrors.description}</div>
          </Container>
          {isEditing ? (
            <Button type='submit'>Editar</Button>
          ) : (
            <Button type='submit'>Criar</Button>
          )}
        </Form>
      </Container>
      <Footer />
    </>
  );
}
