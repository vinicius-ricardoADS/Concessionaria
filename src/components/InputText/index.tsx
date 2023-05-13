import {ChangeEvent, FormEventHandler} from 'react';
import {Form, FormControlProps} from 'react-bootstrap';
import * as api from '../../services/api';

interface InputProps {
  id: string;
  label: string;
  description: string;
  min?: number;
  max?: number;
}

export default function InputText({ type, id, label, description, ...rest }: InputProps & FormControlProps) {
    const onChange = async(event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        await api.get('blablabla');
    };

    return (
        <Form.Group>
            <style type='text/css'>
                {`
                .form-text {
                  color: rgba(1, 1, 1, 0.6) !important;
                } 
                `}
            </style>
            <Form.Label htmlFor={id}>{label}</Form.Label>
            <Form.Control
                type={type}
                id={id}
                aria-describedby={`${id}-help`}
                onChange={onChange}
                {...rest}
            />
            <Form.Text bsPrefix='' id={`${id}-help`} className="custom-form-text" muted>{description}</Form.Text>
        </Form.Group>
    );
}
