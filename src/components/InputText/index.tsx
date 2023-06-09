/* eslint-disable linebreak-style */
import {Form, FormControlProps} from 'react-bootstrap';

interface InputProps {
  id: string;
  label: string;
  description: string;
  value?: any,
  min?: number;
  max?: number;
}

export default function InputText({ type, value, id, label, description, ...rest }: InputProps & FormControlProps) {
  return (
    <Form.Group>
      <style type='text/css'>
        {`
                .form-label{
                  color: white !important;
                } 
                .form-text {
                  color: white !important;
                } 
                .form-control {
                  background-color
                }
                `}
      </style>
      <Form.Label htmlFor={id}>{label}</Form.Label>
      <Form.Control
        type={type}
        id={id}
        name={id}
        value={value}
        aria-describedby={`${id}-help`}
        {...rest}
      />
      <Form.Text bsPrefix='' id={`${id}-help`} className="custom-form-text" muted>{description}</Form.Text>
    </Form.Group>
  );
}
