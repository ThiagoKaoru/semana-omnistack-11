import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg'
import './styles.scss';


export default function Profile(){
    return(
        <div className="profile-container">
            <header>
                <img src={logoImage} alt="Be the Hero"/>
                <span>Bem vindo, Id 23</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ul>
                <li>
                    <strong>Caso: 1</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe assumenda quisquam provident adipisci omnis neque possimus quae! Impedit omnis aperiam cum ducimus itaque ipsam quis suscipit quam, id sequi eius?</p>
                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>Caso: 1</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe assumenda quisquam provident adipisci omnis neque possimus quae! Impedit omnis aperiam cum ducimus itaque ipsam quis suscipit quam, id sequi eius?</p>
                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>Caso: 1</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe assumenda quisquam provident adipisci omnis neque possimus quae! Impedit omnis aperiam cum ducimus itaque ipsam quis suscipit quam, id sequi eius?</p>
                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>Caso: 1</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe assumenda quisquam provident adipisci omnis neque possimus quae! Impedit omnis aperiam cum ducimus itaque ipsam quis suscipit quam, id sequi eius?</p>
                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
            </ul>
        </div>
    );
}