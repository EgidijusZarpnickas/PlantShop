import SectionBest from "../components/SectionBest";
import SectionCategories from "../components/SectionCategories";
import SectionDeals from "../components/SectionDeals";
import SectionHot from "../components/SectionHot";
import Sectiontestimonials from "../components/SectionTestimonials";
import Hero from "../Hero";

export default function HomePage() {


    return (
        <>

            <Hero></Hero>
            <SectionCategories></SectionCategories>
            <SectionBest></SectionBest>
            <SectionHot></SectionHot>
            <SectionDeals></SectionDeals>
            <Sectiontestimonials></Sectiontestimonials>



        </>
    )
}