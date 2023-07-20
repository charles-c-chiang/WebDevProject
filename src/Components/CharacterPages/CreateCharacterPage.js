import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCharacter, createFranchise, getFranchiseByName } from '../../Services/characters';
import { checkUser } from '../Auth/AuthService';
import './CharacterPage.css';

const CreateCharacterPage = () => {
  const [characterData, setCharacterData] = useState({
    characterName: "",
    tier: "",
    weight: "",
    runSpeed: "",
    dash: "",
    airSpeed: "",
    franchise: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFranchise = async () => {
      try {
        const franchise = await getFranchiseByName(characterData.franchise);
        if (franchise) {
          setCharacterData((prevData) => ({ ...prevData, franchise: franchise.get('Name') }));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchFranchise();
  }, [characterData.franchise]);

  if (!checkUser()) {
    navigate("/auth/login");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharacterData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let franchisePointer;
      if (characterData.franchise) {
        franchisePointer = await createFranchise(characterData.franchise);
      }

      await createCharacter({
        characterName: characterData.characterName,
        tier: characterData.tier,
        weight: characterData.weight,
        runSpeed: characterData.runSpeed,
        dash: characterData.dash,
        airSpeed: characterData.airSpeed,
        franchisePointer,
      });

      alert('Character created successfully!');
      navigate('/main'); // Redirects the user to the main page after successful creation
    } catch (error) {
      alert(`An error occurred: ${error.message}`);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleSubmit} className="card p-4 text-white">
        <h1>Create a New Character</h1>
        <div className="mb-3">
          <label className="form-label">Character Name</label>
          <input
            className="form-control"
            name="characterName"
            value={characterData.characterName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tier</label>
          <input className="form-control" name="tier" value={characterData.tier} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Weight</label>
          <input className="form-control" name="weight" value={characterData.weight} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Run Speed</label>
          <input className="form-control" name="runSpeed" value={characterData.runSpeed} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Dash Speed</label>
          <input className="form-control" name="dash" value={characterData.dash} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Air Speed</label>
          <input className="form-control" name="airSpeed" value={characterData.airSpeed} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Franchise</label>
          <input
            className="form-control"
            name="franchise"
            value={characterData.franchise}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          Create Character
        </button>
      </form>
    </div>
  );
};

export default CreateCharacterPage;
