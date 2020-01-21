import React, { useState, useEffect } from "react";
import fb from "../../firebase";
import { Container } from "./styles";
import { Link } from "react-router-dom";

export default function Admin({ history }) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginSenha, setLoginSenha] = useState("");

  async function HandleSubmit(e) {
    e.preventDefault();
    await fb
      .auth()
      .signInWithEmailAndPassword(loginEmail, loginSenha)
      .then(user => {
        if (user.user.uid !== null) {
          history.push("/usr");
        }
      });
  }

  useEffect(() => {
    fb.auth().onAuthStateChanged(newUser => {
      if (newUser) {
        history.push("/usr");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <header>
        <h2>Login</h2>
      </header>
      <form onSubmit={HandleSubmit}>
        <label>E-MAIL *</label>
        <input
          type="email"
          placeholder="Digite seu email"
          value={loginEmail}
          onChange={event => setLoginEmail(event.target.value)}
        />
        <label>SENHA *</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={loginSenha}
          onChange={event => setLoginSenha(event.target.value)}
        />
        <button type="submit" className="btn">
          Entrar
        </button>
        <Link to="/cadastroUsuario">Não tem cadastro?</Link>
      </form>
    </Container>
  );
}
