import React from 'react';

import myPhoto from '../../images/about-me__photo.jpg'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <section className='about-me' id='about-me'>
            <h2 className='about-me__title'>
                Студент
            </h2>
            <hr className='about-me__hr' />
            <div className='about-me__container'>
                <div className='about-me__info'>
                    <p className='about-me__info-name'>
                        Александр
                    </p>
                    <p className='about-me__info-description'>
                        Фронтенд-разработчик, 31&nbsp;год
                    </p>
                    <p className='about-me__info-about'>
                        Я&nbsp;родился и&nbsp;живу в&nbsp;Москве, закончил МГТУ им.Н.Э.Баумана.
                        Я&nbsp;женат и&nbsp;у&nbsp;нас есть любимая дочь. Я&nbsp;люблю кататься
                        на&nbsp;шоссейном велосипеде на&nbsp;дальние расстояния, зимой катаюсь
                        на&nbsp;горных лыжах. Недавно решил попоробовать себя в&nbsp;программировании.
                        После прохождения курса по&nbsp;веб-разработке, хочу сменить работу
                        и&nbsp;заниматься программированием.
                    </p>
                    <a
                        className='about-me__github-link'
                        href='https://github.com/fadinalexander'
                        target='_blank'
                        rel='noreferrer'
                    >
                        GitHub
                    </a>

                </div>
                <div className='about-me__photo-container'>
                    <img
                        className='about-me__photo'
                        src={ myPhoto }
                        alt="Фото студента"
                    />
                </div>
            </div>
        </section>
    )
}

export default AboutMe