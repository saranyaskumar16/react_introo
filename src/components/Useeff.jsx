import React from 'react'
import userContext from '../context/usercontext'
import { useContext } from 'react'

function Useeff() {
  const [name, setName]=useContext(userContext)
  return (
    <div>hello {name}
    <button onClick={()=>setName("Atharv Krishna")}></button>
    </div>

  )
}

export default Useeff