import { useState, useEffect } from 'react'

import Input from "./components/Input.jsx";
import SearchResults from "./components/SearchResults.jsx";

import countriesService from './services/countriesService.js'


const App = () => {

    const [countries, setCountries] = useState([])
    const [searchString, setSearchString] = useState('')

    const filterSearchInput = (searchString)=> {
        return countries.filter(country => country.name.common.toLowerCase().includes(searchString.toLowerCase()))
    }

    useEffect(() => {
        countriesService
            .get()
            .then(countriesData => {
                console.log('countriesData', countriesData)
                setCountries([...countriesData])
            })
            .catch(error => console.log('error', error))
    }, [])
    return (
        <div>
            <Input label={'search'} handleOnChange={setSearchString} value={searchString}/>
            <SearchResults searchString={searchString} matchingCountries={filterSearchInput(searchString)} />
        </div>
    )
}

export default App