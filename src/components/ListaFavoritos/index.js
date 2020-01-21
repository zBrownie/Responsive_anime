import React from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";
// import fb from "../../firebase.js";

export default function ListaFavoritos({ data, remove }) {
  return (
    <Container>
      <ul>
        {data.map(anime => (
          <li className="fav-item" key={anime.id}>
            <header>
              <img src={anime.img} alt={anime.title} />
              <div className="anime-info">
                <strong>{anime.title}</strong>
                <span>{anime.dia}</span>
                <span>{anime.streaming ? "Passando" : "Hiato"}</span>
              </div>
            </header>
            {/* <p>{"dev.bio"}</p> */}
            <div className="acoes">
              <Link to={`/anime/${anime.id}`}>Page</Link>
              <button onClick={() => remove(anime.id)}>Remover</button>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}
