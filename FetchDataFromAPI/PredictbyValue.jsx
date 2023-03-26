import React from 'react'
import Axios from 'axios';
import { useState } from 'react';

const PredictbyValue = () => {
    const [name, setName] = useState("")
    const [predictedData,setpredictedData] = useState(null)
    const FetchData = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
           setpredictedData(res.data) 
        })
    }

  return (
      <div>
          <input placeholder='Ex Kemboi' onChange={(event) => {
              setName(event.target.value)
        }}/>
          <button onClick={FetchData}>PREDICT VALUES</button>
          <h1>YOUR NAME: {predictedData?.name}</h1>
          <h1>PREDICTED AGE: {predictedData?.age}</h1>
          <h1>TOTAL COUNTS: {predictedData?.count}</h1>
    </div>
  )
}

export default PredictbyValue