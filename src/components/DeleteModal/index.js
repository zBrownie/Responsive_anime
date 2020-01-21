import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid #000"
  },
  paper: {
    position: "absolute",
    width: 450,
    backgroundColor: "#fefefe",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  btn: {
    height: 32,
    width: 120,
    color: "#fff",
    border: 0,
    marginLeft: 10,
    fontWeight: "bold",
    marginTop: 20,
    cursor: "pointer"
  },
  btnContainer: {
    display: "flex",
    justifyContent: "space-evenly"
  }
}));

export default function DeleteModal({ show, id, close, animeDelete }) {
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();

  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`
    };
  }

  return (
    <Modal open={show}>
      <div className={classes.paper} style={modalStyle}>
        <h2 id="simple-modal-title">Deletando Anime</h2>
        <p id="simple-modal-description">Tem certeza deseja deletar?</p>
        <div className={classes.btnContainer}>
          <button
            className={classes.btn}
            style={{ backgroundColor: "#c20808" }}
            onClick={animeDelete}
          >
            Deletar
          </button>
          <button
            className={classes.btn}
            style={{ backgroundColor: "#e7e7e7" }}
            onClick={close}
          >
            Voltar
          </button>
        </div>
      </div>
    </Modal>
  );
}
