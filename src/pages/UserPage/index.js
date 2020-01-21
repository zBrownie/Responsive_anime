import React, { useState, useEffect } from "react";

import { Container } from "./styles";
import UserInfo from "../../components/UserInfo";
import ListaFavoritos from "../../components/ListaFavoritos";
import fb from "../../firebase";

export default function UserPage({ history }) {
  const [userData, setuserData] = useState([]);
  const [data, setdata] = useState([]);
  const [favs, setfavs] = useState([]);
  const [userId, setuserId] = useState("");
  useEffect(() => {
    getUser();
    // getAnimes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getUser() {
    await fb.auth().onAuthStateChanged(user => {
      if (user) {
        getDataUser(user.uid);
        setuserId(user.uid);
      } else {
        history.push("/login");
      }
    });
  }

  async function getDataUser(userid) {
    const tempU = await fb
      .firestore()
      .collection("users")
      .doc(userid)
      .get()
      .then(docs => ({ id: docs.id, ...docs.data() }));
    setuserData(tempU);
    await getAnimes(tempU.fav);
  }

  async function getAnimes(favoritos) {
    let tempA = await fb
      .firestore()
      .collection("animes")
      .get()
      .then(query => query.docs.map(docs => ({ id: docs.id, ...docs.data() })));
    setdata(tempA);

    if (favoritos.length > 0) {
      let listF = [];
      tempA.map(anime =>
        favoritos.map(id => {
          if (id === anime.id) {
            listF.push(anime);
          }
          return;
        })
      );
      setfavs(listF);
    }
  }

  async function handleRemoveFavorito(id) {
    const tempArray = Array.from(favs);
    tempArray.splice(id, 1);
    await fb
      .firestore()
      .collection("users")
      .doc(userId)
      .update({
        fav: tempArray
      });
    setfavs(tempArray);
  }

  async function handleSingOut() {
    await fb.auth().signOut();
  }

  return (
    <Container>
      <aside>
        <strong></strong>
        <UserInfo data={userData} qtdFav={favs.length} logout={handleSingOut} />
      </aside>
      <main>
        <ListaFavoritos data={favs} remove={handleRemoveFavorito} />
      </main>
    </Container>
  );
}
