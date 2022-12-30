import { useState, useEffect } from "react";

import CardList from "./components/CardList";
import Searchbox from "./components/Searchbox";

import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);

  console.log("render!");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (evt) => {
    const searchFieldString = evt.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <Searchbox onChangeHandler={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
