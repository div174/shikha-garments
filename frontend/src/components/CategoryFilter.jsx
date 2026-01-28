import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div className="flex overflow-x-auto pb-4 mb-6 gap-3 no-scrollbar justify-start md:justify-center px-2 snap-x">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`flex-shrink-0 px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-sm snap-center ${selectedCategory === category
                        ? 'bg-blue-900 text-white shadow-md ring-2 ring-blue-300'
                        : 'bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-800 border border-slate-200'
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
