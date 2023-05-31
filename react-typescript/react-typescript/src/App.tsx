import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import { Person } from "./components/Person";
import PersonList from "./components/PersonList";
import {Status} from "./components/Status";

function App() {
  const personName = {
    first: "Jai",
    last: "Krishna",
  };

  const personList = [
    { id: 1, first: "Jai", last: "Singh" },
    { id: 2, first: "Srikanya", last: "Singh" },
    { id: 3, first: "Srinika", last: "Singh" },
  ];
  return (
    <div className="App">
      {/* <Greet name="Jai" count={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList name={personList} /> */}
      <Status status= "loading"/>
    </div>
  );
}

export default App;
