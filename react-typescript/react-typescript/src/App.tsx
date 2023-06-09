import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import { Person } from "./components/Person";
import PersonList from "./components/PersonList";
import {Status} from "./components/Status";
import Button from "./components/Button";
import Input from "./components/Input";
import ComponentStyle from "./components/ComponentStyle";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/state/User";
import { Counter } from "./components/state/Counter";
import { DomRef } from "./components/ref/DomRef";
import { Private } from "./components/auth/Private";
import { Profiles } from "./components/auth/Profiles";

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
      <Greet name="Jai"  isLoggedIn={true} />
      <Button handleClick = {(event, id)=>{
        console.log("button clicked", event, id)
      }}/>
      <Person name={personName} />
      <Input value="" handleChange={(event)=>
      console.log(event)}/>
      <ComponentStyle styles={{border:"1px solid red", maxWidth:"150px", margin:"auto", padding:"5px"}}/>
      {/* <LoggedIn/> */}
      <User/>
      <Counter/>
      <DomRef/>
      <Private isLoggedIn={true} Component={Profiles}/>
    </div>
  );
}

export default App;
 