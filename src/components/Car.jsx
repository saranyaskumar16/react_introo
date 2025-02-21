import React from 'react'
import { useState } from 'react';
import Useeff from './Useeff';

function car() {
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [color, setColor] = useState("red");
  
    return (
      <>
      <Useeff/>
        <h1>My {brand}</h1>
        <p>
          It is a {color} {model} from {year}.
        </p>
      </>
    )
}

export default car