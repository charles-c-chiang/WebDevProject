//import axios from 'axios';
import data from './characters.json'
const axios = window.axios;
const url =
  "https://my-json-server.typicode.com/kellybuchanan/WebDev-Spring2021";

/* Axios to import json data */
export const createUser = (id, characterName, weight, runSpeed, tier) => {
  return axios({
    method: "post",
    url: `${url}/characters`,
    data: {
      id,
      characterName,
      weight,
      runSpeed,
      tier
    },
    headers: {
      "Content-Type": "application/json"
    },
    json: true
  })
    .then((response) => {
      console.log("POST response: ", response);
    })
    .catch((err) => {
      console.log("POST error: ", err);
    });
};

export const getAllUsers = () => {
  return (
    axios
      .get('./characters.json')
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        console.log("GET Error: ", err);
      })
  );
};

export const getAllUsers1 = () => {
    console.log(data)
    return data;
}
