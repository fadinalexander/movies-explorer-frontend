class MainApi {
    constructor({ url, headers }) {
        this._url = url
        this._headers = headers
    }

    _request(url, options) {
        return fetch(url, options).then(this._checkResult)
    }

    _checkResult(res) {
        return res.json().then(data => {
            if (res.ok) {
                return data
            } else {
                return Promise.reject(data.message || `Упс... произошла ошибка ${res.status}`)
            }
        })
    }
    
    register = ({ name, email, password }) => {
        return this._request(`${this._url}/signup`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ name, email, password })
        })
    }

    login = (email, password) => {
        return this._request(`${this._url}/signin`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ email, password })
        })
    }

    logout = () => {
        return this._request(`${this._url}/signout`, {
            method: 'POST',
            headers: this._headers,
            credentials: 'include',
        })
    }

    getUser() {
        return this._request(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers,
            credentials: 'include'
        })
    }

    editUser(data) {
        return this._request(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                id: data.id,
                name: data.name,
                email: data.email
            }),
            credentials: 'include'
        })
    }

    saveMovie(movie) {
        return this._request(`${this._url}/movies`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: `https://api.nomoreparties.co${movie.image.url}`,
                trailerLink: movie.trailerLink,
                thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
                movieId: movie.id,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN
            }),
            credentials: 'include'
        })
    }

    getSavedMovies() {
        return this._request(`${this._url}/movies`, {
            method: 'GET',
            headers: this._headers,
            credentials: 'include'
        })
    }

    deleteSavedMovie(movieId) {
        return this._request(`${this._url}/movies/${movieId}`, {
            method: 'DELETE',
            headers: this._headers,
            credentials: 'include'
        })
    }
}

const mainApi = new MainApi({
    // url: 'https://api.fadinhost.nomoredomainsicu.ru',
    url: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default mainApi
