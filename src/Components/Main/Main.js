import {
  useEffect,
  useState
} from "react";
import { getAllCharacters } from "../../Services/Characters.js";
import MainList from "./MainList.js";
import "./MainList.css";

/* Import data */
const Main = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filterByTier, setFilterByTier] = useState("");

  useEffect(() => {
    getAllCharacters().then((characters) => {
        console.log(characters);
        setCharacters(characters);
    });
    }, []);

  // useEffect(() => {
  //     readCompany().then((company) => {
  //         console.log('companies: ', company);
  //         //console.log(company);
  //         // const name = company[0].get("Name")

  //         setCompany(company);
  //     });
  //     }, []);

  /* Search handling for user interaction*/
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  /* Sorting by weight */
  const handleSortBy = (event) => {
    setSortBy(event.target.value);
  };

  /* Filter by tier */
  const handleFilterByTier = (event) => {
    setFilterByTier(event.target.value);
  };

  if (!characters) {
    console.log("uh OH")
    return
  }

  /* Edit list by filters and search */
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

  /* React */
  return (
      
      <div className="background poppinsFont main-container">
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
/*   <div>{company}</div> */