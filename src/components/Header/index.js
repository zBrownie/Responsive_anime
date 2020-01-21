import React, { useState, useEffect } from "react";

import { Container } from "./styles";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import fb from "../../firebase";

export default function Header({ history }) {
  const [userOn, setuserOn] = useState(false);
  const [userAdmin, setAdmin] = useState(false);
  const [userName, setuserName] = useState("");

  useEffect(() => {
    verifUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function verifUser() {
    await fb.auth().onAuthStateChanged(async newUser => {
      if (newUser) {
        setuserOn(true);
        await handleUserData(newUser.uid);
      } else {
        setuserOn(false);
      }
    });
  }

  async function handleUserData(userId) {
    await fb
      .firestore()
      .collection("users")
      .doc(userId)
      .get()
      .then(doc => {
        const { admin, nome } = doc.data();
        setuserName(nome);
        if (admin) {
          setAdmin(true);
        } else {
          setAdmin(false);
        }
      });
  }

  async function handleSignOut() {
    await fb
      .auth()
      .signOut()
      .then(task => {
        setuserOn(false);
      });
  }

  return (
    <Container>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
          Otaku List
        </Link>
      </div>

      {userOn === false ? (
        <Link to="/login">Login</Link>
      ) : (
        <>
          {userAdmin !== true ? (
            <div className="menu-admin">
              <Link to={`/usr/${userName}`}>{userName}</Link>
              <Link to="/login" onClick={handleSignOut}>
                Sair
              </Link>
            </div>
          ) : (
            <div className="menu-admin">
              <Link to={`/usr/${userName}`}>{userName}</Link>
              <Link to="/cadastro">Cadastrar</Link>
              <Link to="/control">Controle</Link>
              <Link to="/login" onClick={handleSignOut}>
                Sair
              </Link>
            </div>
          )}
        </>
      )}
    </Container>
  );
}
