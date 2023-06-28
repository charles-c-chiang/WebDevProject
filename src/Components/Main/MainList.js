/* Format data from json file into cards */
const MainList = ({ characters }) => {
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
