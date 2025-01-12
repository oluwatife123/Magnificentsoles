import React from 'react';

const FilterOptions = ({ onFilter }) => {
  const handleFilterChange = (e) => {
    onFilter(e.target.value);
  };

  return (
    <div>
      <select onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="price_low">Price: Low to High</option>
        <option value="price_high">Price: High to Low</option>
        <option value="newest">Newest</option>
      </select>
    </div>
  );
};

export default FilterOptions;
