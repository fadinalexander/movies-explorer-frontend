import React from 'react';

import './AboutProject.css'

const AboutProject = () => {
    return (
        <section className='about-project' id='about-project'>

            <h2 className='about-project__title'>
                О проекте
            </h2>
            <hr className='about-project__hr' />

            <ul className='about-project__list-container'>

                <li className='about-project__list'>
                    <p className='about-project__list_title'>
                        Дипломный проект включал 5&nbsp;этапов
                    </p>
                    <p className='about-project__list_description'>
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.
                    </p>
                </li>

                <li className='about-project__list'>
                    <p className='about-project__list_title'>
                        На&nbsp;выполнение диплома ушло 5&nbsp;недель
                    </p>
                    <p className='about-project__list_description'>
                        У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </li>
            </ul>

            <div className='about-project__timeLine'>
                <p className='about-project__fill about-project__fill_green'>1&nbsp;неделя</p>
                <p className='about-project__fill about-project__fill_grey'>4&nbsp;недели</p>
                <p className='about-project__fill'>Back-end</p>
                <p className='about-project__fill'>Front-end</p>
            </div>
        </section>
    )
}

export default AboutProject