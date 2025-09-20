'use client'
import React from 'react';
import Header from "./components/Header";
import PropertyCard from './components/PropertyCard';
import Footer from './components/Footer'
import { useEffect,useState } from 'react';





export default function HomePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/routes/items") 
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  return (
    <div className="layout">
      <Header />
      <PropertyCard />

      <div className="cards">
        <h1>Items</h1>
        <ul>
          {items.map((item: any) => (
            <li key={item._id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </div>
  );
}
