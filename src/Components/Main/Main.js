import React, { useEffect, useState } from "react";
import { getAllCharacters } from "../../Services/characters";
import MainList from "./MainList.js";
import "./MainList.css";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../Auth/AuthService";

const Main = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filterByTier, setFilterByTier] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getAllCharacters().then((characters) => {
      console.log(characters);
      setCharacters(characters);
    });
  }, []);

  const buttonHandler = () => {
    navigate("/home");
  }

  //redirects unauthorized user to login page

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

  if (!characters) {
    console.log("uh OH");
    return null;
  }

  const filteredCharacters = characters.filter((user) =>
    user.get("characterName").toLowerCase().includes(searchTerm.toLowerCase())
  );

  let sortedCharacters = filteredCharacters;

  if (filterByTier) {
    sortedCharacters = sortedCharacters.filter((user) => user.get("tier") === filterByTier);
  }

  if (sortBy === "weight-asc") {
    sortedCharacters = sortedCharacters.sort(
      (a, b) => parseInt(a.get("weight"), 10) - parseInt(b.get("weight"), 10)
    );
  } else if (sortBy === "weight-desc") {
    sortedCharacters = sortedCharacters.sort(
      (a, b) => parseInt(b.get("weight"), 10) - parseInt(a.get("weight"), 10)
    );
  }

  return (
    <div className="background poppinsFont main-container">
      <button onClick={buttonHandler}>Home</button>
      <center>
        <h1>Smash Fighter Statistics</h1>
      </center>
      <input
        className="search poppinsFont"
        type="text"
        placeholder="Search Fighters"
        value={searchTerm}
        onInput={handleSearch}
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

      <MainList characters={sortedCharacters} />
    </div>
  );
};

export default Main;
