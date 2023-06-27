import {
    useEffect,
    useState
  } from "react";
  import { getAllUsers } from "./../../Services/characters.js";
  import MainList from "./MainList.js";
  
  /* Import data */
  const Main = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [filterByTier, setFilterByTier] = useState("");
  
    useEffect(() => {
        getAllUsers().then((users) => {
            setUsers(users);
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
  
    /* Edit list by filters and search */
    const filteredUsers = users.filter((user) =>
      user.characterName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    let sortedUsers = filteredUsers;
  
    if (filterByTier) {
      sortedUsers = sortedUsers.filter((user) => user.tier === filterByTier);
    }
  
    if (sortBy === "weight-asc") {
      sortedUsers = sortedUsers.sort(
        (a, b) => parseInt(a.weight, 10) - parseInt(b.weight, 10)
      );
    } else if (sortBy === "weight-desc") {
      sortedUsers = sortedUsers.sort(
        (a, b) => parseInt(b.weight, 10) - parseInt(a.weight, 10)
      );
    }
  
    /* React */
    return (
      <div class="background poppinsFont">
        <center>
          <h1>Smash Fighter Statistics</h1>
        </center>
        <input
          class="search poppinsFont"
          type="text"
          placeholder="Search Fighters"
          value={searchTerm}
          onInput={handleSearch}
        />
        <div>
          <label for="filter-tier-select">Filter by Tier:</label>
          <select
            class="filtermenu poppinsFont"
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
          <label for="sort-select">Sort By:</label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={handleSortBy}
            class="sortmenu poppinsFont"
          >
            <option value="">Select Weight</option>
            <option value="weight-asc">Weight (Ascending)</option>
            <option value="weight-desc">Weight (Descending)</option>
          </select>
        </div>
      
        <MainList users={sortedUsers} />
      </div>
    );
  };
  
  export default Main;
  /*   <div>{company}</div> */