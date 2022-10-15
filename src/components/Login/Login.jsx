import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import "./Login.css"
import { basicSchema } from '../../schemas';
import IconPaciente from '../IconPaciente';

const onSubmit = (values, actions) => {
    console.log("values");
    console.log("actions");
};

function Login(){
    const {values, errors,touched, handleBlur, handleChange, handleSubmit} = useFormik({
      initialValues:{
        userEmail: '',
        userPassword: '',
    },   
    validationSchema:basicSchema,  
    onSubmit,
 });
   
console.log(errors);
    
 return(  
        <div className='cadastro'>
       
         <IconPaciente />
        <form onSubmit={handleSubmit} className="form" >
           
            <div className="formField">
                <label htmlFor="userEmail">Seu email</label>
                <input className="input_cadastro" 
                type="email" 
                placeholder="Digite seu email..." 
                name="userEmail" 
                id="userEmail"
                onChange={handleChange}
                value={values.userEmail}
                onBlur={handleBlur}
                 /> 
                 {errors.userEmail && touched.userEmail ? <div>{errors.userEmail}</div> : null}
                 
                 <label htmlFor="userPassword">Sua senha</label>
                 <input className="input_cadastro" 
                type="password" 
                placeholder="Digite sua senha..."
                name="userPassword" 
                id="userPassword"
                onChange={handleChange}
                value={values.userPassword} 
                onBlur={handleBlur} />
                {errors.userPassword && touched.userPassword ? <p>{errors.userPassword}</p> : null}
            </div>             

            <div className="enviar-cadastro">
            <div className="link-login">
                 <a href="/cadastro">Esqueci minha senha</a>
                </div>
                <button className="button" type="submit">Entrar</button>            
            </div>
        </form>
    </div>     
    )
}

export default Login;