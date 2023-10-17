import React from 'react';

import './Techs.css'

const Techs = () => {
    return (
        <section className='techs' id='techs'>
            <h2 className='techs__title'>
                Технологии
            </h2>
            <hr className='techs__hr' />
            <div className='techs__container'>
                <h1 className='techs__container-title'>7&nbsp;технологий</h1>
                <p className='techs__container-description'>
                    На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.
                </p>
            </div>
            <ul className='techs__icons'>
                <li className='techs__icon'>HTML</li>
                <li className='techs__icon'>CSS</li>
                <li className='techs__icon'>JS</li>
                <li className='techs__icon'>React</li>
                <li className='techs__icon'>Git</li>
                <li className='techs__icon'>Express.js</li>
                <li className='techs__icon'>mongoDB</li>
            </ul>
        </section>
    )
}

export default Techs