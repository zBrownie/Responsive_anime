import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import fb from "../../firebase";

import { Container } from "./styles";

// import camera from "../../assets/camera.svg";

export default function Edit({ history }) {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [link, setlink] = useState("");
  const [link2, setlink2] = useState("");
  const [pos, setpos] = useState();
  const [streaming, setstreaming] = useState();
  const [dia, setdia] = useState();

  const [img, setimg] = useState();
  const [url, seturl] = useState("");

  const [userId, setuserId] = useState(null);
  const { animeId } = useParams();

  useEffect(() => {
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        setuserId(user.uid);
      } else {
        history.push("/login");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getDataAnime() {
    await fb
      .firestore()
      .collection("animes")
      .doc(animeId)
      .get()
      .then(docs => {
        const data = docs.data();
        settitle(data.title);
        setdesc(data.desc);
        setlink(data.link);
        setlink2(data.link2);
        setpos(data.pos);
        setstreaming(data.streaming);
        seturl(data.img);
        setdia(data.dia);
      });
  }

  useEffect(() => {
    getDataAnime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const preview = useMemo(() => {
    return img ? URL.createObjectURL(img) : null;
  }, [img]);

  async function handleSubmit(e) {
    e.preventDefault();
    const ref = fb.firestore().collection("animes");

    const data = {
      updatetime: new Date().getTime(),
      desc: desc,
      dia: dia,
      img: url || null,
      link: link || null,
      link2: link2 || null,
      pos: parseInt(pos),
      streaming: parseInt(streaming),
      title: title,
      idUser: userId,
      x: 1,
      y: 2
    };
    await ref
      .doc(animeId)
      .update(data)
      .then(task => {
        history.push("/control");
      });
  }

  function handleDiaSemana(e) {
    const pos = e.target.value;
    if (pos !== null) {
      setpos(pos);
    }

    let index = e.nativeEvent.target.selectedIndex;
    let diaSemana = e.nativeEvent.target[index].text;
    if (diaSemana !== null) {
      setdia(diaSemana);
    }
  }

  async function handleUploadImg(e) {
    setimg(e.target.files[0]);
    const filename = e.target.files[0].name;
    const storageRef = fb
      .storage()
      .ref()
      .child("anime_poster");

    const imagesRef = storageRef.child(`${filename}${Date.now()}`);

    await imagesRef.put(e.target.files[0]).then(snapshot => {
      snapshot.ref.getDownloadURL().then(url => seturl(url));
    });
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label
          id="img"
          style={{ backgroundImage: `url(${preview})` }}
          className={img ? "has-img" : null}
        >
          <input type="file" onChange={handleUploadImg} />
          <img src={url} alt="select img" />
        </label>

        <label htmlFor="title">TITULO *</label>
        <input
          id="title"
          type="text"
          placeholder="Titulo do anime"
          value={title}
          onChange={event => settitle(event.target.value)}
        />
        <label htmlFor="link">LINK *</label>
        <input
          id="link"
          type="text"
          placeholder="Digite link site oficial"
          value={link}
          onChange={event => setlink(event.target.value)}
        />
        <label htmlFor="link2">LINK 2 *</label>
        <input
          id="link2"
          type="text"
          placeholder="Digite link site pirata"
          value={link2}
          onChange={event => setlink2(event.target.value)}
        />

        <select
          id="streaming"
          value={streaming}
          onChange={e => setstreaming(e.target.value)}
        >
          <option defaultValue>Transmitindo?</option>
          <option value="1">Sim</option>
          <option value="0">Não</option>
        </select>

        <select id="dia" value={pos} onChange={handleDiaSemana}>
          <option defaultValue>Dia da semana</option>
          <option value="1">Segunda</option>
          <option value="2">Terça</option>
          <option value="3">Quarta</option>
          <option value="4">Quinta</option>
          <option value="5">Sexta</option>
          <option value="6">Sabado</option>
          <option value="7">Domingo</option>
        </select>

        <label htmlFor="desc">SINOPSE *</label>
        <textarea
          id="desc"
          value={desc}
          onChange={e => setdesc(e.target.value)}
        ></textarea>

        <button type="submit" className="btn">
          Editar
        </button>
      </form>
    </Container>
  );
}
