// import fsPromises from 'fs/promises';
// import path from 'path'

import {promises as fs} from 'fs';



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

export function FormatPopulation(population: number){

    let populationAsString = population.toString();

    let result = populationAsString.replace(/,/g,"").replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return result;
}

// export async function ReadData(){

// // const filePath = path.join(process.cwd(), 'libs/data.json');
// // const jsonData = (await fsPromises.readFile(filePath)).toString();
// // const objectData: [] = JSON.parse(jsonData);

// console.log(process.cwd());

// const file = await fs.readFile(process.cwd() + 'libs/data.json', 'utf8');
// const data: [] = JSON.parse(file);

// return data;
// }