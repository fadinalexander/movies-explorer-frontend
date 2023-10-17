import React from 'react';

import './InfoToolTip.css'

const InfoToolTip = ({ onClose, regSuccess }) => {
    const handleButtonCloseClick = () => {
        onClose()
    }
    const toolTipChange = regSuccess
        ? 'toolTip__successe'
        : 'toolTip__error'

    return (
        <div className="toolTip">
            <div className="toolTip__container">
                <div className={ toolTipChange } />
                <h2 className="toolTip__header">
                    { regSuccess
                        ? "Вы успешно зарегистрировались"
                        : "Что-то пошло не так! Попробуйте ещё раз."
                    }
                </h2>
                <button
                    className="toolTip__btn-close"
                    onClick={ handleButtonCloseClick }
                ></button>
            </div>
        </div>
    )
}

export default InfoToolTip