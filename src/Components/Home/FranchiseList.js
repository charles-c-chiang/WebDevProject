import React from 'react';


//List of all the Franchises by Name element

const FranchiseList = ({ franchises }) => {
  return (
    <div className="container">
      {franchises.length > 0 && (
        <div>
          {franchises.map((franchise) => (
            <div key={"1" + franchise.id} className="card">
              <p>{franchise.get("Name")}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FranchiseList;
