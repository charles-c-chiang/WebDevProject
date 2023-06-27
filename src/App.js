import './App.css';
import Main from "./Components/Main/Main.js";
import Parse from 'parse';

Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'ntq5OrLHz625cND9Z2vynuq9Ccjjj5c3ITgsgwH8', // This is your Application ID
  'xILZeVFGQ32mHPQbhY48jxeyDkMO8OR5opnENnFG' // This is your Javascript key
);

function App() {
  return <Main />;
}


export default App;
