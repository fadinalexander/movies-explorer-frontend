import { useState, useEffect } from 'react';

const usePageSize = () => {
    const [pageSize, setPageSize] = useState({ width: window.innerWidth })

    useEffect(() => {
        const resizeHandler = () => {
            setPageSize({ width: window.innerWidth })
        }
        window.addEventListener('resize', resizeHandler)

        return () => {
            window.removeEventListener('resize', resizeHandler)
        }
    }, [])

    return pageSize
}

export default usePageSize