import {useEffect, useState} from "react"

import weatherServices from "../services/weatherServices.js"

const CountryDataPoint = ({label, detail}) => {
    return (
        <p>{label} {detail}</p>
    )
}

const CountryLanguages = ({languages}) => {
    return (
        <div>
            <h4>languages:</h4>
            <ul>
                {Object.entries(languages).map(language =>
                    <li key={language[0]}>{language[1]}</li>)}
            </ul>
        </div>
    )
}

const CountryInfoPanel = ({country}) => {

    const [temperature, setTemperature] = useState('')

    useEffect(() => {
        weatherServices
            .getByLatLang(
                country['capitalInfo']['latlng'][0],
                country['capitalInfo']['latlng'][1]
            )
            .then(weatherData => {
                setTemperature(weatherData['current']['temperature_2m'])
            })
            .catch(error => console.log('error', error))
    }, [])

    return (
        <div>
            <h1>{country.name.common}</h1>
            <CountryDataPoint label={'capital'} detail={country.capital[0]} />
            <CountryDataPoint label={'area'} detail={country.area} />
            <CountryLanguages languages={country.languages} />
            <img src={country.flags.png} />
            <CountryDataPoint label={'most recent reported temp in capital city - celsius'} detail={temperature} />
        </div>
    )
}

export default CountryInfoPanel