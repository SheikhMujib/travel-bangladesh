import React, { useContext } from "react";
import { DataContext } from "../../contexts/DataProvider/DataProvider";
import Destination from "../Destination/Destination";

const Destinations = () => {
  const { destinations } = useContext(DataContext);

  return (
    <div className="container">
      <h3 className="text-center mb-4">Please, choose your favorite destinations to travel.</h3>
      {destinations.map((destination) => (
        <Destination
          key={destination.id}
          destination={destination}
        ></Destination>
      ))}
    </div>
  );
};

export default Destinations;
