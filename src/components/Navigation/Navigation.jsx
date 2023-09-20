import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = ({ isLoggedIn }) => {
    const location = useLocation()
    const [pageSize, setPageSize] = useState(
        {
            with: window.innerWidth,
            height: window.innerHeight
        }
    )

    useEffect(() => {
        const resizeHandler = () => {
            setPageSize(
                {
                    with: window.innerWidth,
                    height: window.innerHeight
                }
            )
        }

        window.addEventListener('resize', resizeHandler)

        return () => {
            window.removeEventListener('resize', resizeHandler)
        }
    }, [])

    return (
        <nav className='navigation'>
            { isLoggedIn
                ? (
                    <>
                        
                    </>
                )
                : (
                    <>
                    </>
                )
            }

        </nav>
    )
}

export default Navigation