import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './style.css'
import api from '../../service/api'

import logoImg from '../../assets/logo.svg'

export default function Register(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    function clearFields(){
        setName('');
        setEmail('');
        setWhatsapp('');
        setCity('');
        setUf('');
    }

    async function handleRegister(event){

        event.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try {
            
            const response = await api.post('/ongs', data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push("/");

        } catch (error) {
            alert('Não foi possível realizar o cadastro');
        }
        
        clearFields();

    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude
                        pessoas a encontrarem os casos da sua ONG.
                    </p>
                    <Link to="/" className="back-link">
                        <FiArrowLeft size={18} color="#E02041"/> 
                        Voltar para o logon
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input type="text" placeholder="Nome da ONG"
                        value={name}
                        onChange={e => {setName(e.target.value)}}
                    />

                    <input type="text" placeholder="E-mail"
                        value={email}
                        onChange={e => {setEmail(e.target.value)}}/>

                    <input type="text" placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => {setWhatsapp(e.target.value)}}
                    />
     
                    <div className="input-group">
                        <input type="text" placeholder="Cidade"
                            value={city}
                            onChange={e => {setCity(e.target.value)}}
                        />
                        <input type="text" placeholder="UF" style={{ width: 80 }}
                            value={uf}
                            onChange={e => {setUf(e.target.value)}}                        
                        />
                    </div>
                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )

}