import Button from "./Button.jsx"
import CountryInfoPanel from "./CountryInfoPanel.jsx"

const SearchListings = ({matchingCountries, handleShowCountry}) => {
    return (
        <ul>
            {matchingCountries.map(country => <li key={country.cca3}>{country.name.common} <Button label={'show'} type={'button'} onClickHandler={handleShowCountry(country.name.common)} /></li>)}
        </ul>
    )
}

const SearchInstruction = ({instruction}) => {
    return (
        <p>{instruction}</p>
    )
}

const CountrySearch = ({searchString, matchingCountries, handleShowCountry}) => {
    const matches = matchingCountries.length
    switch (true) {
        case searchString === '': return <SearchInstruction instruction={'Specify a search filter'} />
        case !matches: return <SearchInstruction instruction={'No matches. Specify another filter'} />
        case matches === 1: return <CountryInfoPanel country={matchingCountries[0]} />
        case matches <= 10: return <SearchListings matchingCountries={matchingCountries} handleShowCountry={handleShowCountry} />
        case matches  > 10: return <SearchInstruction instruction={'Too many matches. Specify another filter'} />
    }
}

export default CountrySearch