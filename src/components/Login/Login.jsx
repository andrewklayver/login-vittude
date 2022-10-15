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

function Login(){
    const {values, errors,touched,isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
      initialValues:{
        email: '',
        password: '',
    },   
    validationSchema:basicSchema,  
    onSubmit,
 });
   
console.log(errors);
    
 return(  
        <div className='cadastro'>
       
         <IconPaciente />
        <form onSubmit={handleSubmit} autoComplete="off" className="form" >
           
            <div className="formField">
              <label>Seu email</label>
                <input 
                id="email"
                type="email" 
                placeholder="Digite seu email..." 
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
                className={errors.email ? "input_cadastro" : "" }
                 /> 
              <div>
              {errors.email && touched.email && <p className="error">{errors.email}</p>}
            
              </div>
              
                 <label>Sua senha</label>
                 <input
                id="password"
                type="password" 
                placeholder="Digite sua senha..."
                onChange={handleChange}
                value={values.password} 
                onBlur={handleBlur} 
                className={errors.password ? "input_cadastro" : "" } />
            
              <div>
              {errors.password && touched.password ? <p>{errors.password}</p> : null}
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
    )
}

export default Login;