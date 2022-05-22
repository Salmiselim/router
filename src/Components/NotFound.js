import React from 'react'

import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate=useNavigate()
  return (
      <div>
    <h1>Oops ! page not found error </h1>
    <button onClick={()=>navigate('/')}>Go home</button>
    </div>
  )
}

export default NotFound