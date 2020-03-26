import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import './style.css'
import api from '../../service/api'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'



export default function Logon(){

    const [id, setId] = useState('');

    const history = useHistory();

    async function handleSession(event){
        
        event.preventDefault();

        try {
            
            const response = await api.post('/sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');


        } catch (error) {
            alert('Não foi possível fazer o login');
        }
        

    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="" className=""/>
                <form onSubmit={handleSession}>
                    <h1>Faça seu logon</h1>
                    <input type="text" placeholder="Sua ID"
                        value={id}
                        onChange={event => setId(event.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );

}