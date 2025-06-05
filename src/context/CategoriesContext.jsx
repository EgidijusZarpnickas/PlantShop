import { createContext } from "react";
import useFetch from "../hooks/useFetch";


const CategoriesContext = createContext()

export function CategoriesProvider ({children}) {


     const { data: categories, loading, error } = useFetch(
           'https://gist.githubusercontent.com/EgidijusZarpnickas/592ade5cf28d9cb083bd756e0b3ea1af/raw/c6d15845df93a58bb90244a832d065e8f739f949/data-category.json',
            'categories', 
            'fileName');

       const value = {categories,loading,error} ;

    //    console.log(value)
       return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
       )     

}

export default CategoriesContext;