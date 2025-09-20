import React, { useState } from "react";

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
}

interface SearchFilterProps {
  data: Property[];
}

const SearchFilter: React.FC<SearchFilterProps> = ({ data }) => {
  const [query, setQuery] = useState("");
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");


  const filteredData = data.filter((item) => {
    const matchesQuery =
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.location.toLowerCase().includes(query.toLowerCase());

    const matchesMin = minPrice === "" || item.price >= minPrice;
    const matchesMax = maxPrice === "" || item.price <= maxPrice;

    return matchesQuery && matchesMin && matchesMax;
  });

  return (
    <div className="p-4 max-w-2xl mx-auto">
    
      <input
        type="text"
        placeholder="Search by city or title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 w-full rounded mb-3"
      />

    
      <div className="flex gap-2 mb-3">
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : "")}
          className="border p-2 w-1/2 rounded"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : "")}
          className="border p-2 w-1/2 rounded"
        />
      </div>


      <ul className="space-y-2">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <li
              key={item.id}
              className="border p-3 rounded shadow-sm hover:bg-gray-50"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.location}</p>
              <p className="text-sm">${item.price} · ⭐ {item.rating}</p>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No results found.</p>
        )}
      </ul>
    </div>
  );
};

export default SearchFilter;
