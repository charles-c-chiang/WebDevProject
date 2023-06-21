import {
    html,
    render,
    useState,
    useEffect
  } from "https://unpkg.com/htm/preact/standalone.module.js";
  
  // TODO: import header
  import { Header } from "./Components/Main/Main.js";
  
  function App() {
    const [titles, setTitle] = useState([]);
  
    useEffect(() => {
      console.log("render");
      getTitle().then((data) => {
        setTitle(data);
      });
    }, []);
  
    return html`
      ${titles.map(
        (title) =>
          html` <${Header} title="This is my Preact App" class="test">
              ${title.title}
            </${Header}>`
      )}
  
      <div>
        Contents of the page
      </div>
    `;
  }
  
  render(html` <${App} /> `, document.getElementById("app"));
  