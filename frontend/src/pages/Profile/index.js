import React, { useState, useEffect } from 'react'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import api from '../../service/api'


import './style.css'
import logoImg from '../../assets/logo.svg'
import NoCase from './NoCase'

export default function Profile(){


    const [incidents, setIncidents] = useState([]);

    const history = useHistory();
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    useEffect(() => {

        api.get('/incidents', { 
            headers: {
                Authorization: ongId,
            } 
        }).then(response => {

            setIncidents(response.data);

        });

    }, [ongId]);
    
    const handleLogout = () => {
        localStorage.clear();
        history.push('/');
    }

    const handleDeleteIncident = async id => {

        try {
            await api.delete(`/incidents/${id}`, {
                headers:{
                    Authorization: ongId
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));

        } catch (error) {
            alert('Erro ao excluir. Tente novamente!');            
        }

    }

    return (

        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vindo, {ongName}</span>
                <Link to="/incident/new" className="button">Cadastrar novo caso</Link>
                <button onClick={handleLogout}><FiPower size={18} color="#E02041"/></button>
            </header>
            
            <h1>Casos cadastrados</h1>
            <NoCase value={incidents.length === 0}/>
            <ul>
                {incidents.map(incident => {
                    return (
                        <li key={incident.id}>
                            <strong>CASO:</strong>
                            <p>{incident.title}</p>

                            <strong>DESCRIÇÃO:</strong>
                            <p>{incident.description}</p>

                            <strong>VALOR:</strong>
                            <p>{Intl.NumberFormat('pt-BR', { 
                                    style: 'currency', 
                                    currency: 'BRL'
                                }).format(incident.value)
                                }
                            </p>

                            <button onClick={() => handleDeleteIncident(incident.id)}>
                                <FiTrash2 size={20} color="#a8a8b3"/>
                            </button>
                        </li>
                    )
                })}
            </ul>

        </div>
    );

}

