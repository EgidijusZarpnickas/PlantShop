
import './componentsStyle/sectionDeals.scss'
import Title from './Title'
import PlantCardList from "./PlantCardList"

export default function SectionDeals() {


    return(
        <section className='wrapper section-deals'>
            <Title text1={'Ferntastic'} text2={'Deals'} showLink={false}></Title>
            <PlantCardList filterType={'deals'} limit={4}></PlantCardList>



        </section>
    )
}