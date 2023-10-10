export const BASE_URL = 'http://localhost:3000'

function request(url, options) {
    return fetch(url, options).then(checkResult)
}

function checkResult(res) {
    if (res.ok)
    {
        console.log(res)
        return res.json()
    }
    return Promise.reject(`Ошибка ${res.status}`)
}

export const register = ({ name, email, password }) => {
    return request(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ name, email, password })
    })
}

export const login = ({ email, password }) => {
    return request(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password })
    })
}

export const logout = () => {
    return request(`${BASE_URL}/signout`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    })
}

// export const getContent = () => {
//     return request(`${BASE_URL}/users/me`, {
//         method: 'GET',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         },
//         credentials: 'include'
//     })
// }