import { useState, useEffect } from 'react'

import Input from "./components/Input.jsx";
import CountrySearch from "./components/CountrySearch.jsx";

import countriesService from './services/countriesService.js'


const App = () => {

    const [countries, setCountries] = useState([])
    const [searchString, setSearchString] = useState('')

    const filterSearchInput = (searchString)=> {
        return countries.filter(country => country.name.common.toLowerCase().includes(searchString.toLowerCase()))
    }

    const handleShowCountry = (commonName) => () => {
        setSearchString(commonName)
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
            <CountrySearch searchString={searchString} matchingCountries={filterSearchInput(searchString)} handleShowCountry={handleShowCountry} />
        </div>
    )
}

export default App