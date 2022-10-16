import { useEffect, useState } from 'react';
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import "./Login.css"
import { basicSchema } from '../../schemas';
import IconPaciente from '../IconPaciente';

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm()
};

function Login() {
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  return (

    <div className='cadastro'>
      <h1 className='text-login'>Faça seu login</h1>
      <div className='cinza'>
        <IconPaciente />
        <form onSubmit={handleSubmit} autoComplete="off" className="form" >

          <div className="formField">
            <label>Email*</label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu email..."
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}

            />
            <div>
              {errors.email && touched.email && <p className="error">{errors.email}</p>}

            </div>
          </div>

          <div className="formField">

            <label>Senha*</label>
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha..."
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
            />

            <div>
              {errors.password && touched.password && <p className="error">{errors.password}</p>}
            </div>
          </div>

          <div className="enviar-cadastro">
            <div className="link-login">
              <a href="#">Esqueci minha senha</a>
            </div>
            <button disabled={isSubmitting} className="button" type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;