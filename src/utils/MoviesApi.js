class MoviesApi {
    constructor({ url, headers }) {
        this._url = url
        this._headers = headers
    }

    _request(url, options) {
        return fetch(url, options).then(this._checkResult)
    }

    _checkResult(res) {
        if (res.ok)
        {
            return res.json()
        }
        return Promise.reject(`Ошибка ${res.status}`)
    }

    getMovies() {
        return this._request(`${this._url}`, {
            method: 'GET',
            headers: this._headers
        })
    }
}

export const moviesApi = new MoviesApi({
    url: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default moviesApi