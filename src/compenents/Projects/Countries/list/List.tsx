import { useEffect, useState } from "react"
import CountryInfo from '../Country-info/CountryInfo.tsx'


const List = ()=>{

    interface Countries {
        name: string;
        alpha3Code: string;
        independent: boolean;
    }

    const URLcountry = 'https://restcountries.com/v2/all?fields=alpha3Code,name';
    const URLcountryCode = 'https://restcountries.com/v2/alpha/';
    let [countriesList , setCountriesList] = useState<[Countries]>([{name: 'countries are loading', alpha3Code: '',independent: true,}]);
    let [countriesInfo , setCountriesInfo] = useState({name: '', capital: '?',borders: [],flags: {png: ''}, population: '?'});

    useEffect(()=>{
        const countries = async()=>{
            const response = await fetch(URLcountry);
            if (response.ok) {
                setCountriesList(await response.json());
            }
            else{   
                throw new Error('Something went wrong with network request');
            }
        }
        
        countries();
        
    }, [])

    const getInfo = async(countryCode: string)=>{
        const response = await fetch(URLcountryCode + countryCode);
        
            if (response.ok) {
                const countryCopy = await response.json()
                setCountriesInfo(countryCopy);   
            }
            else{   
                throw new Error('Something went wrong with network request');
            }
    }

    return(
        <>
            <h3 className="mb-3 text-center">Countries</h3>
            <div className="container d-flex justify-content-center gap-2 flex-wrap">
                <div className="">
                    <ul className="list-group overflow-auto" style={{maxHeight: '300px'}}>
                        {countriesList.map(item =>{
                            return(
                                <li key={item.alpha3Code} className="list-group-item p-0">
                                    <div onClick={()=>getInfo(item.alpha3Code)} className="btn btn-dark" style={{width: '100%' , height: '100%'}}>
                                        {item.name}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <CountryInfo name={countriesInfo.name} capital={countriesInfo.capital} borders={countriesInfo.borders} flags={countriesInfo.flags} population={countriesInfo.population}></CountryInfo>
            </div>

        </>
    )
}

export default List