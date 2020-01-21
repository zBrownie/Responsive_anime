import React from "react";

import { Container } from "./styles";
import Star from "@material-ui/icons/Star";
import { Link } from "react-router-dom";

export default function UserInfo({ data, qtdFav, logout }) {
  return (
    <Container>
      <img src={data.imgUrl} alt={data.nome} />
      <div className="user-info">
        <strong>{data.nome}</strong>
        <div className="icons">
          <Star />
          <p>{qtdFav}</p>
        </div>
        <div className="buttons">
          <Link to="/control">Lista Animes</Link>
          <button onClick={logout}>Sair</button>
        </div>
      </div>
    </Container>
  );
}
