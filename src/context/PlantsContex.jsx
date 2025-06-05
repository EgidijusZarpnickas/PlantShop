import { createContext } from "react";
import useFetch from "../hooks/useFetch";


const PlantsContext = createContext()

export function PlantsProvider ({children}) {


     const { data: plants, loading, error } = useFetch(
           'https://gist.githubusercontent.com/EgidijusZarpnickas/d0d123b610ed8480fd5ed066e7d94933/raw/726dd53cb8fd8ac655ef05d1e7d970c9ea42e80e/plant.json',
           'plants',
           'image'
       );
       const value = {plants,loading,error} ;

       console.log(value)
       return (
        <PlantsContext.Provider value={value}>{children}</PlantsContext.Provider>
       )     

}

export default PlantsContext;