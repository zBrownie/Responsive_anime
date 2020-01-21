import React from "react";

import { Container } from "./styles";
import { Link } from "react-router-dom";

export default function AnimesDia({ list }) {
  return (
    <Container>
      <div className="anime-dia">
        <ul>
          {!list ? (
            <li>
              <div className="error">
                <p>Sem Anime</p>
              </div>
            </li>
          ) : (
            list.map(anime => (
              <li key={anime.id}>
                <Link to={`/anime/${anime.id}`}>
                  <img src={anime.img} alt={anime.title} />
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </Container>
  );
}
