
import Button from './Button'
import './componentsStyle/bestCard.scss'

export default function BestCard({ imageSrc, title }) {


    return (

        <div className='bestCard'>
            <a href='#' className='bestCarLink'>
                <img src={imageSrc} alt={title}></img>
                <div className='bestOverlay'>
                    <h3 className='bestTitle'>{title}</h3>
                </div>
            </a>
            <Button className='green-btn' children='Shop Now'></Button>


        </div>
    )
}