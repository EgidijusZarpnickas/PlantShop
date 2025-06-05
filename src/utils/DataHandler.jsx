
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import React from 'react';

export default function DataHandler({ loading, error, children , noData }) {

    if (loading) {
        return (<ClimbingBoxLoader
            color="#50806B"
            margin= {2}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"></ClimbingBoxLoader>)
    }

    if (error) {

        return(<> Error: {error}</>)
    }

    if(noData){
        return(
            <div className="example">
                Plant not found
            </div>
        )
    }
     return(children)




}