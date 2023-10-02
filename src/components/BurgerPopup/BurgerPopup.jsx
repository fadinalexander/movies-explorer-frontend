import React, { useCallback, useEffect, useState } from 'react';

import './BurgerPopup.css'
import Navigation from '../Navigation/Navigation';

const BurgerPopup = ({ isLoggedIn }) => {
    const [isBurgerPopupOpen, setIsBurgerPopupOpen] = useState(false)

    const handleBurgerClick = () => {
        setIsBurgerPopupOpen(!isBurgerPopupOpen)
    }

    const closeBurgerPopup = useCallback(() => {
        setIsBurgerPopupOpen(false)
    }, [])

    const handlePopupClick = (evt) => {
        evt.stopPropagation()
    }

    const handdleLinkClick = () => {
        closeBurgerPopup()
    }

    useEffect(() => {
        if (!isBurgerPopupOpen) return
        const closeEscapeBtn = (evt) => {
            if (evt.key === 'Escape')
            {
                closeBurgerPopup()
            }
        }

        document.addEventListener('keydown', closeEscapeBtn)

        return () => {
            document.removeEventListener('keydown', closeEscapeBtn)
        }

    }, [isBurgerPopupOpen, closeBurgerPopup])

    return (
        <div className='burgerPopup'>
            <button
                className='burgerPopup__btn-burger'
                onClick={ handleBurgerClick }
            />

            { isBurgerPopupOpen && (
                <div
                    className='burgerPopup__overlay'
                    onClick={ closeBurgerPopup }
                >
                    <div
                        onClick={ handlePopupClick }
                        className={ 'burgerPopup__container' }
                    >
                        <button
                            className='burgerPopup__btn-close'
                            onClick={ closeBurgerPopup }
                        >
                        </button>
                        <Navigation
                            isLoggedIn={ isLoggedIn }
                            onLinkClick={ handdleLinkClick }
                        />
                    </div>
                </div> )
            }
        </div>
    )
}

export default BurgerPopup