import './App.css';
import Main from "./Components/Main/Main.js";
import Parse from 'parse';

Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'fDFFGgPctSV3PFQ2oEdhIFfVAzK0NJWsdFxKFuEM', // This is your Application ID
  'jtAro2AhWheEcQyDHRnEL89NJKKP0jTAzJEK4FO7' // This is your Javascript key
);

function App() {
  return <Main />;
}


export default App;
