import axios from 'axios'

const personsUrl = 'http://localhost:3001/persons'

const add = newPerson => {
    return axios
            .post(personsUrl, newPerson)
            .then(response => response.data)
}

const get = () => {
    return axios
            .get(personsUrl)
            .then(response => response.data)
}

export default { add, get }