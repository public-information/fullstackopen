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
            <CountryDataPoint label={'capital'} detail={country.capital[0]}/>
            <CountryDataPoint label={'area'} detail={country.area}/>
            <CountryLanguages languages={country.languages}/>
            <img src={country.flags.png} />
        </div>
    )
}

const SearchListings = ({matchingCountries}) => {
    console.log('matchingCountries', matchingCountries)
    return (
        <ul>
            {matchingCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)}
        </ul>
    )
}

const SearchInstruction = ({instruction}) => {
    return (
        <p>{instruction}</p>
    )
}

const SearchResults = ({searchString, matchingCountries}) => {
    const matches = matchingCountries.length
    switch (true) {
        case searchString === '': return <SearchInstruction instruction={'Specify a search filter'}/>
        case !matches: return <SearchInstruction instruction={'No matches. Specify another filter'}/>
        case matches === 1: return <CountryInfoPanel country={matchingCountries[0]} />
        case matches <= 10: return <SearchListings matchingCountries={matchingCountries} />
        case matches  > 10: return <SearchInstruction instruction={'Too many matches. Specify another filter'}/>
    }
}

export default SearchResults