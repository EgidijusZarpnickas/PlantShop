import useFetch from '../hooks/useFetch.js';
import './componentsStyle/bestList.scss'
import DataHandler from '../utils/DataHandler.jsx'
import BestCard from './BestCard.jsx';



export default function BestList() {

    const { data: bestCards, loading, error } = useFetch(
        'https://gist.githubusercontent.com/EgidijusZarpnickas/38ea12c2a03be8050cfcf9e53fe56714/raw/fa51c7289c11428c9122eec8f816c4a83f33b21c/bestSelling.json',
        'bestSelling',
        'fileName'
    );


    console.log(bestCards.map(card => card.imageSrc));

    console.log(bestCards);




    return (
        <div className='bestList'>
            <DataHandler>
                {bestCards.map(card => (

                    <BestCard key={card.id} imageSrc={card.imageSrc} title={card.title} > </BestCard>

                  

                ))}
            </DataHandler>
        </div>




    )
}
