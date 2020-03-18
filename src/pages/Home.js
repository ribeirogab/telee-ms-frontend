import React from 'react'

import logout from '../services/logout'

export default function Home () {
  return (
    <>
      <h1>Home</h1>
      <button onClick={logout}>logout</button>
    </>
  )
}
