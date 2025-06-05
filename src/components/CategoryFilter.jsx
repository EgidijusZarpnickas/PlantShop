import { useState } from 'react';
import useCategories from '../hooks/useCategories'
import './componentsStyle/categoryFilter.scss'

export default function CategoryFilter({ onCategoryChange , selectedCategories }) {

    const { categories } = useCategories();



    const handleChange = categoryId => {
        if (categoryId === 'all') {
       
            onCategoryChange([]);
            return;
        }

        const updateCategories = selectedCategories.includes(categoryId)
            ? selectedCategories.filter(id => id !== categoryId)
            : [...selectedCategories, categoryId];

      
        onCategoryChange(updateCategories);

    }

    return (
        <div className='categorie-filter'>
            <details>
                <summary>
                    By categories
                </summary>
                <div className='category-dropdown'>
                    <label>
                        <input type='checkbox'
                            checked={selectedCategories.length === 0}
                            onChange={() => handleChange('all')}
                        ></input>
                        All
                    </label>
                    {categories.map(category => (
                        <label key={category.id}>
                            <input type='checkbox'
                                checked={selectedCategories.includes(category.id)}
                                onChange={() => handleChange(category.id)}
                            ></input>
                            {category.title}
                        </label>
                    ))}
                </div>
            </details>
        </div>
    )
}