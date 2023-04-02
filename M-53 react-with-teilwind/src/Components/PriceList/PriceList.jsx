import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);
  return (
    <div className="mx-12 mt-4">
      <h1 className="text-4xl font-bold text-purple-950 bg-purple-300 py-5 text-center">
        Awesome Affordable Price:
      </h1>
      <div className="md:grid grid-cols-3 gap-4">
        {prices.map((price) => (
          <PriceCard key={price.id} price={price}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
