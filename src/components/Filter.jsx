import { useState } from "react";
import { InputNumber, CheckboxGroup, Checkbox, Button } from "rsuite";
import PropTypes from "prop-types";

const categories = [
  "men's clothing",
  "jewelery",
  "electronics",
  "women's clothing",
];

const Filters = ({ onApplyFilters }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const applyFilters = () => {
    onApplyFilters({
      categories: selectedCategories,
      priceRange: { min: minPrice, max: maxPrice },
    });
  };

  return (
    <div>
      <h3>Фільтри</h3>
      <h5>Категорії</h5>
      <CheckboxGroup
        name="categories"
        value={selectedCategories}
        onChange={setSelectedCategories}
      >
        {categories.map((category) => (
          <Checkbox key={category} value={category}>
            {category}
          </Checkbox>
        ))}
      </CheckboxGroup>

      <h5>Ціна</h5>
      <InputNumber
        prefix="$"
        value={minPrice}
        onChange={setMinPrice}
        min={0}
        max={maxPrice}
      />
      <InputNumber
        prefix="$"
        value={maxPrice}
        onChange={setMaxPrice}
        min={minPrice}
      />

      <Button onClick={applyFilters} appearance="primary">
        Застосувати
      </Button>
    </div>
  );
};

Filters.propTypes = {
  onApplyFilters: PropTypes.func.isRequired, // onApplyFilters is a required function
};

export default Filters;
