import React, { useState, useEffect } from "react";
import fb from "../../firebase";
import { Container } from "./styles";

export default function CadastroUsuario({ history }) {
  const [cad_nome, setNome] = useState("");
  const [cad_email, setEmail] = useState("");
  const [cad_senha, setSenha] = useState("");

  async function HandleSubmit(e) {
    e.preventDefault();

    await fb
      .auth()
      .createUserWithEmailAndPassword(cad_email, cad_senha)
      .then(async newUser => {
        await fb
          .firestore()
          .collection("users")
          .doc(newUser.user.uid)
          .set({
            nome: cad_nome,
            admin: 0,
            email: cad_email,
            fav: [],
            img: null
          })
          .then(doc => {
            if (doc) {
              history.push("/login");
            }
          });
      });
  }

  useEffect(() => {
    fb.auth().onAuthStateChanged(newUser => {
      if (newUser) {
        history.push("/");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <header>
        <h2>Cadastrar Usuario</h2>
      </header>
      <form onSubmit={HandleSubmit}>
        <label>NOME/APELIDO *</label>
        <input
          placeholder="Digite seu Nome/Apelido"
          value={cad_nome}
          onChange={event => setNome(event.target.value)}
        />
        <label>E-MAIL *</label>
        <input
          type="email"
          placeholder="Digite seu email"
          value={cad_email}
          onChange={event => setEmail(event.target.value)}
        />
        <label>SENHA *</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={cad_senha}
          onChange={event => setSenha(event.target.value)}
        />
        <button type="submit" className="btn">
          Cadastrar
        </button>
      </form>
    </Container>
  );
}
