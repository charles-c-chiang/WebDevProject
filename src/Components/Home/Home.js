import React, { useEffect, useState } from 'react';
import { getAllFranchises } from '../../Services/franchises.js';
import FranchiseList from './FranchiseList.js';
import { useNavigate, Link } from 'react-router-dom';
import { checkUser, logoutUser } from '../Auth/AuthService';
import stashlogo from '../../Assets/stashlogo.png';
import './Home.css'; // Import the CSS file for styling

export default function Home() {
  const [franchises, setFranchises] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllFranchises().then((franchises) => {
      setFranchises(franchises);
    });
  }, []);

  const buttonHandler = () => {
    navigate('/main');
  };

  const logoutHandler = () => {
    logoutUser();
    navigate("/auth");
    alert("You have successfully logged out!");
  }

  // Redirects user to login page if not authenticated
  useEffect(() => {
    if (!checkUser()) {
      navigate('/auth/login');
    }
  }, [navigate]);

  return (
    <section>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={stashlogo} alt="Logo" className="logo" />
          </Link>
          {/* logout */}
          <button onClick={logoutHandler} className="btn btn-secondary">
            Logout
          </button>
        </div>
      </nav>

      <div>
        <div>
          <center>
            <h1>Welcome Home</h1>
          </center>
        </div>
      </div>
      <div>
        <div>
          <center>
            <p>Made by Gabriel Sheikh (Student A) and Charles Chiang (Student B)</p>
          </center>
          <br />
        </div>
      </div>

      <div>
        <div className="col text-center">
          <button onClick={buttonHandler} className="btn btn-secondary">
            Click Here to see Smash Fighter Statistics!
          </button>
          <br />
          <br />
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <p>See these Franchises's Fighters on the Stats Page!</p>
        </div>
      </div>
      <div className="row text-white">
        <FranchiseList franchises={franchises} />
      </div>
    </section>
  );
}
