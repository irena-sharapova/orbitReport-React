import React from 'react';
import satData from "../components/satData";
import "../components/styling.css";

const Buttons = ({ filterByType, setSat, orbitTypes }) => {

  return (
    <div className = "flex-container">
      {orbitTypes.map((type, index) => (
        <button onClick={() => filterByType(type)} key={index}>
          {type} Orbit
        </button>
      ))}

      <button onClick={() => setSat(satData)}>
        All Orbits
      </button>
    </div>
  );
};

export default Buttons;