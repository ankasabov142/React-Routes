import React, { useState, useEffect } from "react";
import { getAllCars } from "./api";

function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carsData = await getAllCars(); // Implement getAllCars function
        setCars(carsData);
      } catch (error) {
        // Handle error
        console.error("Error fetching cars", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>All Cars</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>{car.make} - {car.model} - {car.year}</li>
        ))}
      </ul>
      {/* Add form for adding new cars */}
    </div>
  );
}

export default CarList;