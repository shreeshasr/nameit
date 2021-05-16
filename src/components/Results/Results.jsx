import React from 'react';
import Namecard from '../Namecard/Namecard';
import './Results.css'

const Results = ({names}) => {

    const namesJsx = names.map(name => {
        return <Namecard key={name} suggestedName={name}/>
    })
    
    return(
        <div className="results-container">
            {namesJsx}
        </div>
    )
}

export default Results;