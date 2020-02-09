import React, { useState, useEffect } from "react";

import "../../global.css";
import { Container } from "./styles";
import fb from "../../firebase";
import AnimesDia from "../../components/AnimesDia";
import AnimeSeason from "../../components/AnimeSeason";
import WeekAnime from '../../components/WeekAnimes'

export default function Home() {
  const [listDay, setListDay] = useState([]);
  const [listSeason, setListSeason] = useState([]);
  let date = getDia();
  function getDia() {
    let dia = new Date().getDay();
    if (dia === 0) {
      return 7;
    } else {
      return dia;
    }
  }
  useEffect(() => {
    const getDay = async () => {
      const tempD = await fb
        .firestore()
        .collection("animes")
        .where("streaming", "==", 1)
        .where("pos", "==", date)
        .get()
        .then(query =>
          query.docs.map(docs => ({ id: docs.id, ...docs.data() }))
        );

      setListDay(tempD);
    };

    getDay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getSeason = async () => {
      const tempS = await fb
        .firestore()
        .collection("animes")
        .where("streaming", "==", 1)
        .get()
        .then(query =>
          query.docs.map(docs => ({ id: docs.id, ...docs.data() }))
        );

      setListSeason(tempS);
    };
    getSeason();
  }, []);

  return (
    <Container>
      <div className="App">
        <main>
          {listDay.lenght !== 0 ? <strong>Passando Hoje</strong> : null}
          <AnimesDia list={listDay} />
          {/* 
          <AnimeSeason list={listSeason} /> */}
          <strong className="season-title">Season</strong>
          <WeekAnime list={listSeason} />
        </main>
      </div>
    </Container>
  );
}
