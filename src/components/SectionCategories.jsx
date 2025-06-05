import CategoriesList from "./CategoriesList"
import Title from "./Title"
import './componentsStyle/sectionCategories.scss'


export default function SectionCategories() {




    return(

        <section className="wrapper section-category" >
            <Title text1 ='Shop' text2 = 'by Category' showLink={false}></Title>
            <CategoriesList></CategoriesList>




        </section>


    )
}