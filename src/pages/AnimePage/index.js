import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fb from "../../firebase.js";
import { Container } from "./styles";
import PlayArrow from "@material-ui/icons/PlayArrow";
import CalendarToday from "@material-ui/icons/CalendarToday";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

export default function AnimePage() {
  const [userData, setuserData] = useState([]);
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [animeFav, setAnimeFav] = useState(false);
  const [, setstate] = useState();

  useEffect(() => {
    async function getAnime() {
      const ani = await fb
        .firestore()
        .collection("animes")
        .doc(id)
        .get()
        .then(docs => ({ id: docs.id, ...docs.data() }));
      setData(ani);
    }
    getAnime();
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getUser() {
    await fb.auth().onAuthStateChanged(user => {
      if (user) {
        getData(user.uid);
      } else {
        return;
      }
    });
  }

  async function getData(userid) {
    const tempU = await fb
      .firestore()
      .collection("users")
      .doc(userid)
      .get()
      .then(docs => ({ id: docs.id, ...docs.data() }));

    if (tempU.fav.includes(id)) {
      setAnimeFav(true);
    }
    setuserData(tempU);
  }

  async function handleAddFavorito() {
    const tempArray = Array.from(userData.fav);
    tempArray.push(data.id);
    await fb
      .firestore()
      .collection("users")
      .doc(userData.id)
      .update({
        fav: tempArray
      });
    setAnimeFav(true);
  }

  async function handleRemoveFavorito() {
    const tempArray = Array.from(userData.fav);
    tempArray.splice(data.id, 1);
    await fb
      .firestore()
      .collection("users")
      .doc(userData.id)
      .update({
        fav: tempArray
      });
    setAnimeFav(false);
  }

  return (
    <Container>
      <header>
        {data.title}
        {userData.length !== 0 ? (
          <>
            {animeFav === true ? (
              <Favorite className="icons" onClick={handleRemoveFavorito} />
            ) : (
              <FavoriteBorder className="icons" onClick={handleAddFavorito} />
            )}
          </>
        ) : null}
      </header>
      <div className="card">
        <img src={data.img} alt={data.title} />

        <div className="streaming-dia">
          <div className="icones">
            <PlayArrow />
            <p>{data.dia}</p>
          </div>
          <div className="icones">
            <CalendarToday />
            <p>{data.streaming ? "Passando" : "Hiato"}</p>
          </div>
        </div>

        <div className="desc">
          <strong>Sinopse</strong>
          <span>{data.desc}</span>
        </div>

        <div className="buttons">
          <a href={data.link}>Site oficial</a>
          <a href={data.link2}>Site Pirata</a>
        </div>
      </div>
    </Container>
  );
}
