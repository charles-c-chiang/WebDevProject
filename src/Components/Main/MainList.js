/* Format data from json file into cards */
const MainList = ({ users }) => {
  return (
    <div className="container">
      {users.length > 0 && (
        <div>
          {users.map((user) => (
            <div key={"1" + user.id} className="card">
              <h3>{user.get("characterName")}{" "}</h3>
              {/* <p>Tier: {user.tier}</p>
              <p>Weight: {user.weight}</p>
              <p>Run Speed: {user.runSpeed}</p>
              <p>Dash Speed: {user.dash}</p>
              <p>Air Speed: {user.airSpeed}</p> */}
            </div>
          )
          )}
        </div>
      )
      
      }
    </div>
  );
};

export default MainList;
