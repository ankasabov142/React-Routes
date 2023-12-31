import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCarById } from "./api";

function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carInfo = await getCarById(id);
        setCar(carInfo);
      } catch (error) {
        console.error("Error fetching car details", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {car ? (
        <div>
          <h2>{car.make} - {car.model} - {car.year}</h2>
        </div>
      ) : (
        <p>Loading car details...</p>
      )}
    </div>
  );
}

export default CarDetails;
