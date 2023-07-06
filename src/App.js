import './App.css';
import Components from "./Components/Components.js"
import Parse from 'parse';
import * as Env from "./environments.js"

Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);

export default function App() {
  window.localStorage.clear()
  return <Components />;
}