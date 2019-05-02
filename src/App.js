import React from 'react';
import './App.css';
import MovieList from './components/MovieList'

function App() {
  const list = ["Batman", "Superman", "Aquaman"]

  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is where to learn more about Flow:
        </p>
        <a
          className="App-link"
          href="https://flow.org/en/docs/getting-started/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Flow
        </a>
      </header>
      <MovieList list={list} />
    </div>
  );
}

export default App;
