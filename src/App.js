// F12 sprawdz konsole JS na stronie

import {useState} from "react";
function App() {
    const [title, setTitle] = useState('Wall-E');

    const movies = [
        {title: "Wall-E"},
        {title: "Pulp Fiction"},
        {title: "Matrix"},
        {title: "1670"},
    ];

    function handleChange(event) {
        setTitle(event.target.value);
    }

    let message;
    if (title.length < 5) {
        message = <div>Tutuł jest za krótki. Nagrywają takie filmy?</div>;
    } else if (title.length < 15) {
        message = <div>Tytuł jest ekstra, w sam raz na plakat przed kinem!</div>;
    } else {
        message = <div>Tytuł jest za długi, nikt tego nie zapamięta.</div>;
    }

    return (
        <div>
            <h1>My favourite movies to watch</h1>
            <h2>Titles</h2>
            <ul>
                {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
            </ul>
            <h3>My favourite movie for today is {title}</h3>
            <input type="text" value={title} onChange={handleChange}/>
            {/* Dodanie przycisku */}
            <button type="button" onClick={() => alert(title)}>
                Pokaż tytuł filmu
            </button>
            {/* Wyświetlanie wiadomości, jeśli tytuł nie jest pusty */}
            {title.length > 0 && <div>{message}</div>}
        </div>
    );
}

export default App;