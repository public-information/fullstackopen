import axios from 'axios'

const weatherUrl = 'https://api.open-meteo.com/v1/forecast'

const getByLatLang = (lat, lng) => {
    return axios
        .get(`${weatherUrl}?latitude=${lat}&longitude=${lng}&current=temperature_2m`)
        .then(response => response.data)
}

export default { getByLatLang }