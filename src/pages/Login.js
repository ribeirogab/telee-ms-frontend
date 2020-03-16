import React from 'react'
import '../assets/css/Login.css'

export default function Login () {
  return (
    <div className="container-login">
      <div className="box">
        <div className="header">
          <h1>
            Gerenciamento<br />
            <span className="color-red">Equipe SKY</span>
          </h1>
        </div>
        <form>
          <input type="text" placeholder="Usuário" />
          <input type="password" placeholder="Senha" />
          <button>ACESSAR</button>
        </form>
        <span className="small">Esqueceu a senha?</span>
      </div>
    </div>
  )
}
