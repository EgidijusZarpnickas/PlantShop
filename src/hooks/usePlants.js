import { useContext } from "react";
import PlantsContext from "../context/PlantsContex";


export default function usePlants() {

    const context = useContext(PlantsContext);
    if (!context) {
        throw new Error('Must be with  Plants Provider');
    }

    return context;

    
}