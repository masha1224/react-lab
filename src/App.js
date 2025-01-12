// F12 sprawdz konsole JS na stronie

import {useState} from "react";
import "milligram";
function App() {
    const [title, setTitle] = useState('Wall-E');
    const [movies, setMovies] = useState([]);
    const [year, setYear] = useState('2023'); // Dodanie roku

    function handleYearChange(event) {
        setYear(event.target.value);
    }

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    function addMovie() {
        const newMovie = { title, year };
        setMovies([...movies, newMovie]); // Dodaj nowy film do listy
        setTitle(''); // Wyczyść pole tytułu
        setYear(''); // Wyczyść pole roku
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
                {movies.map((movie, index) => (<li key={index}>{movie.title} ({movie.year})</li>))}
            </ul>
            <h3>Add Movie</h3>
            <h4>Title</h4>
            <input type="text" value={title} onChange={handleTitleChange}/>
            {/* Wyświetlanie wiadomości, jeśli tytuł nie jest pusty */}
            {
                title.length > 0 && <div>{message}</div>
            }
            <h5>Year</h5>
            <input type="text" value={year} onChange={handleYearChange}/>
            {/* Dodanie przycisku */}
            <button type="button" onClick={addMovie}>
                Add
            </button>
        </div>
    )
        ;
}

export default App;