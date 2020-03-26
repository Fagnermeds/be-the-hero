import React, { useState } from 'react'

import './style.css'
import logoImg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../service/api'



export default function NewIncident() {

    const history = useHistory();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    const handleNewInsident = async event => {

        event.preventDefault();

        const data = {
            title,
            description,
            value
        }
        try {
        
            await api.post('/incidents', data, {
                headers: {
                    authorization: ongId
                }
            });
            
            history.push('/profile');
            
        } catch (error) {
            alert('Erro ao cadastrar novo caso. Tente novamente!');    
        }

    }

    const clearFields = () => {

        setTitle('');
        setDescription('');
        setValue('');

    }

    return (
        <div className="newincident-container">
            <div className="content">
                <section className="">
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>
                        Descreva o caso detalhadamente para encontrar
                        um hério que o resolva.
                    </p>
                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para home
                        </Link>
                </section>

                <form onSubmit={handleNewInsident}>

                    <input type="text" placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea placeholder="Descrição" cols="30" rows="10"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    ></textarea>
                    <input type="text" placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <div className="input-group">
                        <button type="submit" className="button">Cadastrar</button>
                    </div>

                </form>
            </div>
        </div>
    );
}