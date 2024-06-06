// import fsPromises from 'fs/promises';
// import path from 'path'

type Country = {
    name: string;
    alpha3Code: string;
}

export function ExtractNativeName(country: { name: { nativeName: {} } }) {
  const nativeNames: { official: string; common: string }[] = Object.values(
    country.name.nativeName
  );

  const nativeName = nativeNames[0];

  return nativeName;
}

export function ExtractCurrencies(country: { currencies: [{ name: string }] }) {
  //const currencies: { name: string }[] = Object.values(country.currencies)

  if(!country.currencies){
    return "";
  }
  const currenciesArray = country.currencies.map((c) => {
    return c.name;
  });

  const currenciesString = currenciesArray.join(", ");

  return currenciesString;
}

export function ExtractLanguages(country: { languages: [{ name: string }] }) {
  const languagesArray = country.languages.map((c) => {
    return c.name;
  });

  const languagesString = languagesArray.join(", ");

  return languagesString;
}

export function FormatPopulation(population: number) {
  let populationAsString = population.toString();

  let result = populationAsString
    .replace(/,/g, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return result;
}

export function ExtractBorderCountries(borders: string[], data: any) {

  let fullNameBorderCountries: string[] = [];

  if(!borders){
    return [];
  }

  for (let index = 0; index < borders.length; index++) {

    const currentBorder = borders[index];

    const foundBorderCountry: Country = data.find((country: Country) => country.alpha3Code == currentBorder);

    const foundBorderCountryFullName = foundBorderCountry.name;

    fullNameBorderCountries.push(foundBorderCountryFullName);

  }

  return fullNameBorderCountries;
}
