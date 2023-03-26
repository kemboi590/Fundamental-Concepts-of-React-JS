import React from 'react'

import  Axios  from 'axios';
import { useState, useEffect } from 'react';

const CatFact = () => {
        //   fetch("https://catfact.ninja/fact").then((res) => res.json()).then((data) => {
//   console.log(data)
// })

const [catFact, setCatFact] = useState("")
const fetchCatFact = () => {
  Axios.get("https://catfact.ninja/fact").then((res) => {
    setCatFact(res.data.fact)
  })
}

useEffect(() => {
  fetchCatFact()
}, [])

  return (
      <div>
        <button onClick={fetchCatFact}>Generate CatFact</button>
       <p> {catFact} </p>
    </div>
  )
}

export default CatFact