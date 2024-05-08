export function ExtractNativeName(country: { name: { nativeName: {} } }) {

    const nativeNames: { official: string, common: string }[] = Object.values(country.name.nativeName)

    const nativeName = nativeNames[0];

    return nativeName;
}

export function ExtractCurrencies(country: { currencies: {} }) {
    const currencies: { name: string }[] = Object.values(country.currencies)

    const currenciesArray = currencies.map(c => {
        return c.name;
    })

    const currenciesString = currenciesArray.join(', ')

    return currenciesString;
}

export function ExtractLanguages(country: { languages: {} }) {
    const languages = Object.values(country.languages);

    const languagesString = languages.join(', ');

    return languagesString;
}