
import { useLocation } from 'react-router-dom';
import usePlants from '../hooks/usePlants';
import DataHandler from '../utils/DataHandler';
import './componentsStyle/plantCardList.scss';
import PlantCard from './PlantCard';

export default function PlantCardList({ filterType = '', limit = 0, selectedCategories = [], priceRange = [0, Infinity] }) {

    const { plants, loading, error } = usePlants();
    const location = useLocation();

    const getFilteredPlants = plants => {
        let filtered = [...plants]; // spread operator, make a copy of array

        //filtering by categories
        if (selectedCategories.length > 0 && !selectedCategories.includes('all')) {
            filtered = filtered.filter(plant => selectedCategories.includes(plant.categoryId))
        }

        //filter by price
        filtered = filtered.filter(plant => {
            const discountedPrice = plant.price * (1 - plant.discount / 100);
            return (
                discountedPrice >= priceRange[0] && discountedPrice <= priceRange[1]
            )
        })

        //sorting by categories
        if (filterType === 'hot') {
            filtered.sort((a, b) =>
                b.rating - a.rating
            )
        } else if (filterType === 'deals') {
            filtered.sort((a, b) =>
                b.discount - a.discount
            )
        } else if (filterType === 'price-high') {
            filtered.sort((a, b) =>
                b.price - a.price
            )
        } else if (filterType === 'price-low') {
            filtered.sort((a, b) =>
                a.price - b.price
            )
        }

        return limit ? filtered.slice(0, limit) : filtered;
    }

    const filteredPlants = getFilteredPlants(plants);
    console.log(filteredPlants);

    const totalPlants = filteredPlants.length;
    const allPlants = plants.length;

    return (
        <>
            {

                location.pathname == '/products' && (
                    <p className="plants-counter">Showing {totalPlants} of {allPlants} Products</p>
                )

            }
            <div className="plant-card-list">
                <DataHandler loading={loading} error={error}>
                    {
                        filteredPlants.length === 0 ? (
                            <p className="noResults">You search did not match any criteria</p>
                        ) : (
                        filteredPlants.map(p => (
                            <PlantCard key={p.id} imageSrc={p.imageSrc} title={p.title} price={p.price} discount={p.discount} plantId={p.id} />
                        ))
                        )
                        }
                </DataHandler>

            </div>

        </>

    )
}