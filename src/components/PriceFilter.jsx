import './componentsStyle/priceFilter.scss';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useEffect, useState } from 'react';
import usePlants from '../hooks/usePlants';

export default function PriceFilter({ onPriceChange }) {
  const { plants } = usePlants();
  const [priceRange, setPriceRange] = useState([0, Infinity]);
  const [maxPrice, setMaxPrice] = useState(Infinity);

  useEffect(() => {
    if (plants.length > 0) {
      const highestPrice = plants.reduce((max, plant) => Math.max(max, plant.price), 0);
      setMaxPrice(highestPrice);
      setPriceRange([0, highestPrice]);
    }
  }, [plants]);

  const handlePriceChange = (value) => {
    setPriceRange(value);
    onPriceChange(value);
  };


  return (
    <div className="price-filter">
      <details>
        <summary>By Price</summary>
        <div className="price-dropDown">
          <label>
            Price range: {priceRange[0]} - {priceRange[1] === Infinity ? '∞' : priceRange[1]} Eur
          </label>
          <Slider
            range
            min={0}
            max={maxPrice}
            value={priceRange}
            onChange={handlePriceChange}
          />
        </div>
      </details>
    </div>
  );
}