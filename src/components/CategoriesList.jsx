import './componentsStyle/categoriesList.scss';
import CategoryCard from './CategoryCard';
import DataHandler from '../utils/dataHandler';
import useCategories from '../hooks/useCategories.js';


export default function CategoriesList() {

    const { categories, loading, error} = useCategories()

    // const { data: categories, loading, error } = useFetch('https://gist.githubusercontent.com/EgidijusZarpnickas/592ade5cf28d9cb083bd756e0b3ea1af/raw/c6d15845df93a58bb90244a832d065e8f739f949/data-category.json', 'categories', 'fileName');






    return (
        <div className='categories-list'>
            <DataHandler
                loading={loading}
                error={error}>

            </DataHandler>
            
            {categories.map(elem => (
                <CategoryCard
                    imageSrc={elem.imageSrc}
                    title={elem.title}
                    key={elem.id}
                    categoryId={elem.id}
                />
            ))}

        </div>


    )
}