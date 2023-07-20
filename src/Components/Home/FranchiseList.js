import React from 'react';

const FranchiseList = ({ franchises }) => {
  return (
    <div className="container">
      <div className="row">
        {franchises.map((franchise) => (
          // Check if the franchise name exists
          franchise.get("Name") && (
            <div className="col-lg-4 col-md-6 mb-4" key={franchise.id}>
              <div className="card">
                <div className="card-body">
                  <center>
                    <h5 className="card-title">{franchise.get("Name")}</h5>
                  </center>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default FranchiseList;
