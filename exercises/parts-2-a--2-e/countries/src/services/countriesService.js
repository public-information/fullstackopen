import axios from 'axios'

const countriesUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const get = () => {
    return axios
        .get(`${countriesUrl}/all`)
        .then(response => response.data)
}

export default { get }