import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Admin from "./pages/Admin";
import CadastroAnime from "./pages/Cadastro_Anime";
import AnimePage from "./pages/AnimePage";
import Erro from "./pages/Erro";
import Control from "./pages/Control";
import Edit from "./pages/Edit";
import CadastroUsuario from "./pages/Cadastro_Usuario";
import UserPage from "./pages/UserPage";
const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Admin} />
      <Route exact path="/cadastro" component={CadastroAnime} />
      <Route exact path="/cadastroUsuario" component={CadastroUsuario} />
      <Route exact path="/anime/:id" component={AnimePage} />
      <Route exact path="/control" component={Control} />
      <Route exact path="/editar/:animeId" component={Edit} />
      <Route exact path="/usr" component={UserPage} />
      <Route path="*" component={Erro} />
    </Switch>
  </Router>
);

export default Routes;
