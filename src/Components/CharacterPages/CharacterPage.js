import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getById, update, removeCharacter, removeFranchise, getCharactersByFranchiseId } from '../../Services/characters';
import { checkUser } from '../Auth/AuthService';
import './CharacterPage.css';

const CharacterPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [formState, setFormState] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const result = await getById(id);
        setCharacter(result);
        setFormState({
          characterName: result.get('characterName'),
          tier: result.get('tier'),
          weight: result.get('weight'),
          runSpeed: result.get('runSpeed'),
          dash: result.get('dash'),
          airSpeed: result.get('airSpeed'),
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchCharacter();
  }, [id]);

  if (!checkUser()) {
    navigate('/auth/login');
  }

  const handleDelete = async () => {
    try {
      if (character) {
        const franchisePointer = character.get('Franchise_Pointer');
        await removeCharacter(character);
        if (franchisePointer) {
          const franchiseId = franchisePointer.id;
          const charactersInFranchise = await getCharactersByFranchiseId(franchiseId);
          if (!charactersInFranchise.length) {
            await removeFranchise(franchiseId);
          }
        }
        alert('Character deleted successfully!');
        navigate('/main');
      }
    } catch (error) {
      console.log(error);
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    Object.entries(formState).forEach(([key, value]) => {
      character.set(key, value);
    });

    await update(character);
    alert('Character updated successfully!');
    navigate('/main');
  } catch (error) {
    console.log(error);
  }
};


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };


  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 character-card text-white">
        {character && (
          <div>
            <h2>{formState.characterName}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Character Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="characterName"
                  value={formState.characterName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Tier</label>
                <input
                  className="form-control"
                  type="text"
                  name="tier"
                  value={formState.tier}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Weight</label>
                <input
                  className="form-control"
                  type="text"
                  name="weight"
                  value={formState.weight}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Run Speed</label>
                <input
                  className="form-control"
                  type="text"
                  name="runSpeed"
                  value={formState.runSpeed}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Dash Speed</label>
                <input
                  className="form-control"
                  type="text"
                  name="dash"
                  value={formState.dash}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Air Speed</label>
                <input
                  className="form-control"
                  type="text"
                  name="airSpeed"
                  value={formState.airSpeed}
                  onChange={handleChange}
                />
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-success ">
                  Update Character
                </button>
                <button type="button" className="btn btn-danger" onClick={handleDelete}>
                  Delete Character
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterPage;
