import React, { useState, useEffect } from 'react';
import './MainList.css';
import { getById } from "../../Services/franchises.js";

const MainList = ({ characters }) => {
  const [franchiseNames, setFranchiseNames] = useState({});

  useEffect(() => {
    const fetchFranchiseNames = async () => {
      const names = {};

      for (const character of characters) {
        const franchisePointer = character.get("Franchise_Pointer");
        if (franchisePointer) {
          const franchise = await getById(franchisePointer.id);
          names[character.id] = franchise.get("Name");
        }
      }

      setFranchiseNames(names);
    };

    fetchFranchiseNames();
  }, [characters]);
  
//  Getting the character data and then franchise names that each character points to


  return (
    <div className="container">
      {characters.length > 0 && (
        <div>
          {characters.map((character) => (
            <div key={"1" + character.id} className="card">
              <h3>{character.get("characterName")}</h3>
              <p>Tier: {character.get("tier")}</p>
              <p>Weight: {character.get("weight")}</p>
              <p>Run Speed: {character.get("runSpeed")}</p>
              <p>Dash Speed: {character.get("dash")}</p>
              <p>Air Speed: {character.get("airSpeed")}</p>
              <p>Franchise: {franchiseNames[character.id]}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainList;
