import { useNavigate } from "react-router-dom";


export default function Home() {
    const history = useNavigate();

    const buttonHandler = () => {
        history("/main");
    }
    return(
        <section>
            <h1>Welcome Home</h1>
            <p>Here, we can look at lots of cool things!!</p>
            <p>Made by Gabriel Sheikh (Student A) and Charles Chiang (Student B)</p>
            <button onClick={buttonHandler}>Click Here to see Smash Fighter Statistics!</button>
        </section>
    )
}