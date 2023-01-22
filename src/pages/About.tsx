import React from 'react';
import { useNavigate } from 'react-router-dom';

export const About: React.FunctionComponent = () => {
    const navigate = useNavigate()
    return(
        <div className="about _container">
            <h1 className="about__title">В этом блоке пока ничего нет, но скоро возможно появиться!</h1>
            <button 
                onClick = {() => navigate('/')}
                className='about__btn'
            >Вернуться на главную</button>
        </div>
    )
}