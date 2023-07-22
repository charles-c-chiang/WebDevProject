import React, { useEffect, useState } from "react";
import { getAllCharacters } from "../../Services/characters";
import MainList from "./MainList.js";
import "./Main.css";
import { useNavigate, Link } from "react-router-dom";
import { checkUser, logoutUser} from "../Auth/AuthService";
import stashlogo from '../../Assets/stashlogo.png';
import smashvideo from '../../Assets/smashvideo1.mp4';
import smashthumb from '../../Assets/smashthumbnail.png';

const Main = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filterByTier, setFilterByTier] = useState("");
  const navigate = useNavigate();
  const videoLink = "55UDxqLzb1c";

  useEffect(() => {
    getAllCharacters().then((characters) => {
      console.log('Fetched characters:', characters);
      setCharacters(characters);
    });
  }, []);

  const buttonHandler = () => {
    navigate("/home");
  };

  const logoutHandler = () => {
    logoutUser();
    navigate("/auth");
    alert("You have successfully logged out!");
  }

  useEffect(() => {
    if (!checkUser()) {
      navigate("/auth/login");
    }
  }, [navigate]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortBy = (event) => {
    setSortBy(event.target.value);
  };

  const handleFilterByTier = (event) => {
    setFilterByTier(event.target.value);
  };

  let filteredCharacters = characters.filter((character) =>
    character.get("characterName") && character.get("characterName").toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filterByTier) {
    filteredCharacters = filteredCharacters.filter((character) => character.get("tier") === filterByTier);
  }

  if (sortBy === "weight-asc") {
    filteredCharacters = [...filteredCharacters].sort(
      (a, b) => parseInt(a.get("weight"), 10) - parseInt(b.get("weight"), 10)
    );
  } else if (sortBy === "weight-desc") {
    filteredCharacters = [...filteredCharacters].sort(
      (a, b) => parseInt(b.get("weight"), 10) - parseInt(a.get("weight"), 10)
    );
  }

  useEffect(() => {
    console.log('filteredCharacters changed:', filteredCharacters);
  }, [filteredCharacters]);

  if (characters === null) {
    console.log("uh OH");
    return null;
  }

  return (
    <div className="background poppinsFont main-container">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={stashlogo} alt="Logo" className="logo" />
          </Link>
          <button onClick={buttonHandler} className="btn btn-secondary">
            Home
          </button>
          {/* Logout button added */}
          <button onClick={logoutHandler} className="btn btn-secondary">
            Logout
          </button>
        </div>
      </nav>

      <center>
        <h1>Smash Fighter Statistics</h1>
      </center>
      <div className="center-div">
        <input
          className="search poppinsFont"
          type="text"
          placeholder="Search Fighters"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div>
          <label htmlFor="filter-tier-select">Filter by Tier:</label>
          <select
            className="filtermenu poppinsFont"
            id="filter-tier-select"
            value={filterByTier}
            onChange={handleFilterByTier}
          >
            <option value="">All Tiers</option>
            <option value="A">Tier A</option>
            <option value="B">Tier B</option>
            <option value="C">Tier C</option>
            <option value="D">Tier D</option>
            <option value="E">Tier E</option>
            <option value="F">Tier F</option>
            <option value="G">Tier G</option>
          </select>
          <label htmlFor="sort-select">Sort By:</label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={handleSortBy}
            className="sortmenu poppinsFont"
          >
            <option value="">Select Weight</option>
            <option value="weight-asc">Weight (Ascending)</option>
            <option value="weight-desc">Weight (Descending)</option>
          </select>
        </div>
      </div>
      <Link to="/character/create" className="btn btn-secondary mb-3">Add New Fighter</Link>
      <MainList characters={filteredCharacters} />
      <br />
      <div class="container-fluid text-center">
        <div class="row">
          <div class = "col">
            <video width="560" height="315"controls="controls" poster={`${smashthumb}`} >
              <source src = {`${smashvideo}`} type="video/mp4"/>
              <p>
                Your browser doesn't support HTML video. Here is a
                <a href="https://www.youtube.com/watch?v=6wjIC6Q0Hkw">link to the video</a> instead.
              </p>
            </video>
          </div>
          <div class = "col">
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoLink}`} title="YouTube video player"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
