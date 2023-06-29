import React, { useEffect, useState } from 'react';
import { getAllFranchises } from "../../Services/franchises.js";
import FranchiseList from "./FranchiseList.js";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [franchises, setFranchises] = useState([]);

  useEffect(() => {
    getAllFranchises().then((franchises) => {
      setFranchises(franchises);
    });
  }, []);

  const history = useNavigate();

  const buttonHandler = () => {
    history("/main");
  }

  //Home Page
  return (
    <section>
      <h1>Welcome Home</h1>
      <p>Made by Gabriel Sheikh (Student A) and Charles Chiang (Student B)</p>
      <button onClick={buttonHandler}>Click Here to see Smash Fighter Statistics!</button>
      <p>See these Franchises's Fighters on the Stats Page!</p>
      <FranchiseList franchises={franchises} />
    </section>
  );
}
