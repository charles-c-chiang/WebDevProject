/* Format data from json file into cards */
const MainList = ({ users }) => {
  return (
    <div class="container">
      {users.map(
        (user) => (
          <div key={user.id} class="card">
            <h3>${user.characterName}</h3>
            <p>Tier: ${user.tier}</p>
            <p>Weight: ${user.weight}</p>
            <p>Run Speed: ${user.runSpeed}</p>
            <p>Dash Speed: ${user.dash}</p>
            <p>Air Speed: ${user.airSpeed}</p>
          </div>
        )
      )}
    </div>
  );
};

export default MainList;
