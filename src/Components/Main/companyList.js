
const CompanyList = ({ users }) => {
    return (
      <div class="container">
       
            <div key={users} class="card">
                
              <p>{users}</p>
            </div>
          
      </div>
    );
  };
  
  export default CompanyList;



  /*
const CompanyList = ({ users }) => {
    return (
      <div class="container">
        {users.map(
          (user) => (
            <div key={user.id} class="card">
                
              <p>{user.Name}</p>
            </div>
          )
        )}
      </div>
    );
  };
  
  export default CompanyList;
   */