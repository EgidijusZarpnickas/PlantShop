import './componentsStyle/button.scss'
import {Link} from 'react-router-dom'

export default function Button ({className, to ='/',children }) {




    return(
        <>
        
        
        
        
        <Link to={to} className={`button ${className}`}>{children}</Link>
        
        
        
        </>


    )
}