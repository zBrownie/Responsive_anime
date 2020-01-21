import React from "react";

import { Container } from "./styles";
import { Link } from "react-router-dom";

export default function Erro() {
  return (
    <Container>
      <p>Pagina não existe</p>
      <div className="row">
        <Link to="/">Inicio</Link>
        <Link to="/login">Login</Link>
      </div>
    </Container>
  );
}
