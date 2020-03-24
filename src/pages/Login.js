import React, { useState } from 'react'
import PropTypes from 'prop-types'

import '../assets/css/Login.css'

import api from '../services/api'

export default function Login ({ history, setToken }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit (e) {
    e.preventDefault()
    const { data } = await api.post('/sessions', { username, password })

    localStorage.setItem('token', data.token)
    setToken(localStorage.getItem('token'))

    history.push('/home')
  }

  return (
    <div className="container-login">
      <div className="box">
        <div className="header">
          <h1>
            Gerenciamento<br />
            <span className="color-red">Equipe SKY</span>
          </h1>
        </div>

        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input type="password" placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>ACESSAR</button>
        </form>

        <span className="small">Esqueceu a senha?</span>
      </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}
