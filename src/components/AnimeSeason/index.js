import React from "react";

import { Container } from "./styles";
import { Link } from "react-router-dom";

export default function AnimeSeason({ list, history }) {
  return (
    <Container>
      <div className="anime-season">
        <ul>
          {list.map(anime => (
            <li key={anime.id}>
              <Link to={`/anime/${anime.id}`}>
                <img src={anime.img} alt={anime.title} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
