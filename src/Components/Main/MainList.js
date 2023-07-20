import React, { useState, useEffect } from 'react';
import './MainList.css';
import { getById } from "../../Services/franchises.js";
import { Link } from 'react-router-dom';

const MainList = ({ characters, refreshList }) => {
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
  }, [characters, refreshList]);

  return (
    <div className="container">
      {characters.length > 0 &&
        characters.map((character) => {
          const franchiseName = franchiseNames[character.id];

          return (
            <Link to={`/character/${character.id}`} key={"1" + character.id} className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <h3>{character.get("characterName")}</h3>
                <p>Tier: {character.get("tier")}</p>
                <p>Weight: {character.get("weight")}</p>
                <p>Run Speed: {character.get("runSpeed")}</p>
                <p>Dash Speed: {character.get("dash")}</p>
                <p>Air Speed: {character.get("airSpeed")}</p>
                <p>Franchise: {franchiseName}</p>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default MainList;
