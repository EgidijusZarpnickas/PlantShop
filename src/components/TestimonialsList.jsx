
import useFetch from '../hooks/useFetch.js';
import './componentsStyle/testimonialsList.scss';
import '../utils/DataHandler.jsx'
import DataHandler from '../utils/DataHandler.jsx';
import TestimonialsCard from './TestimonialsCard.jsx';

export default function TestimonialsList() {

    const { data: testimonials, loading, error } = useFetch(
        'https://gist.githubusercontent.com/EgidijusZarpnickas/752f4c7e94b0087400223b1a3a9773d5/raw/6bb9eda6ad55a2b61da0bdfaf89b662714437f06/clients.json',
        'clients',
        'img'
    );

    // clients yra aplankalas paciame visual code , o img - yra ka meginam istraukti is gisto kaip pavadina nuotrauka 

    console.log(testimonials);
     return(
        <div className='test-list'>
            <DataHandler loading={loading} error={error} >
                {
                    testimonials.map(card => (
                        <TestimonialsCard 
                        key={card.id}
                        imageSrc = {card.imageSrc}
                        name = {card.name}
                        text = {card.text}
                        rating={card.rating}

                        ></TestimonialsCard>
                    ))
                }
            </DataHandler>

        </div>
     )
}