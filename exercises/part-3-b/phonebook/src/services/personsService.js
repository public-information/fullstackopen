import axios from 'axios'

const personsUrl = '/api/persons'

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

const put = (updatedPerson) => {
    return axios
        .put(`${personsUrl}/${updatedPerson.id}`, updatedPerson)
        .then(response => response.data)
}

const remove = id => {
    return axios
        .delete(`${personsUrl}/${id}`)
        .then(response => response.data)
}

export default { add, get, put, remove }