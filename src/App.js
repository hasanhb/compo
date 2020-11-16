import React from "react"
import ProfilPhoto from"./compenent/ProfilPhoto"
import FullName from "./compenent/FullName";
import Addres from "./compenent/Addres"
import './App.css';


function App() {
  return (
    <div className="App">
      <ProfilPhoto/>
      <FullName name="hbh"/>
      <Addres ville="hammem ghzez" rue="abdaalahhajem"/>
    </div>
  );
}

export default App;
