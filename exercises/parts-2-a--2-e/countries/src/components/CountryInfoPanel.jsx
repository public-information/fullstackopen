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
    return (
        <div>
            <h1>{country.name.common}</h1>
            <CountryDataPoint label={'capital'} detail={country.capital[0]} />
            <CountryDataPoint label={'area'} detail={country.area} />
            <CountryLanguages languages={country.languages} />
            <img src={country.flags.png} />
        </div>
    )
}

export default CountryInfoPanel