import React, { useState } from 'react'
import userContext from '../context/usercontext'
import Car from './Car'
const Home = () => {
  const [name, setName]=useState("Saranya")
  return (
    <userContext.Provider value={[name, setName]}>
    <div>Home <br />
      <Car />
    </div>
    </userContext.Provider>

  )
}

export default Home