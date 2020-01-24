import React, { useEffect, useState } from "react";
import fb from "../../firebase";
import { Container } from "./styles";
import DeleteModal from "../../components/DeleteModal";

export default function Control({ history }) {
  const [data, setdata] = useState([]);
  const [showModal, setshowModal] = useState(false);
  const [animeId, setanimeId] = useState(null);
  const [admin, setadmin] = useState(false);
  useEffect(() => {
    getUser();
    getAnimes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getUser() {
    await fb.auth().onAuthStateChanged(user => {
      if (user) {
        getDataUser(user.uid);
      } else {
        history.push("/login");
      }
    });
  }

  async function getDataUser(id) {
    await fb
      .firestore()
      .collection("users")
      .doc(id)
      .get()
      .then(docs => {
        const { admin } = docs.data();

        if (admin) {
          setadmin(true);
        }
      });
  }

  async function getAnimes() {
    const tempA = await fb
      .firestore()
      .collection("animes")
      .orderBy("title")
      .get()
      .then(query => query.docs.map(docs => ({ id: docs.id, ...docs.data() })));

    setdata(tempA);
  }

  async function handleDelete() {
    await fb
      .firestore()
      .collection("animes")
      .doc(animeId)
      .delete()
      .then(action => {
        handleModalDelete();
      });

    const itemArray = Array.from(data);
    itemArray.splice(animeId, 1);
    setdata(itemArray);
  }

  function handleModalDelete() {
    if (showModal) {
      setshowModal(false);
    } else {
      setshowModal(true);
    }
  }
  return (
    <Container>
      <main>
        <ul>
          {data.map(item => (
            <li
              className="anime-item"
              key={item.id}

            >
              <header>
                <img src={item.img} alt={item.title} onClick={() => {
                  history.push(`/anime/${item.id}`);
                }} />

                <div className="anime-info">
                  <strong onClick={() => {
                    history.push(`/anime/${item.id}`);
                  }}>{item.title}</strong>
                  <span>{item.dia}</span>
                  <span>
                    {item.streaming ? (
                      <p style={{ color: "#23231f" }}>Passando</p>
                    ) : (
                        <p style={{ color: "#f00000" }}>Hiato</p>
                      )}
                  </span>
                  {admin === true ? (
                    <div className="buttons">
                      <button
                        className="btnEditar"
                        onClick={() => {
                          history.push(`/editar/${item.id}`);
                        }}
                      >
                        Editar
                      </button>
                      <button
                        className="btnDelete"
                        onClick={() => {
                          setanimeId(item.id);
                          console.log(animeId);

                          handleModalDelete();
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  ) : null}
                </div>
              </header>
            </li>
          ))}
        </ul>
      </main>
      <DeleteModal
        show={showModal}
        id={animeId}
        close={handleModalDelete}
        animeDelete={handleDelete}
      />
    </Container>
  );
}
