import styled from "styled-components";

export const Container = styled.div`
  margin: 20px auto 0;
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;
  background: #fff;

  .card img {
    width: 300px;
    height: 400px;
    border-radius: 5px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
  }

  .desc {
    margin: 20px auto;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }

  .desc span {
    margin: 20px 20px;
    font-size: 1em;
  }

  .desc strong {
    align-self: center;
    font-size: 16px;
  }

  .card button {
    width: 40%;
    height: 46px;
    background: #23231f;
    color: #fff;
    border: 0;
  }
  .icones {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .streaming-dia {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .buttons {
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    padding: 10px 0;
  }

  .buttons a {
    padding: 10px 0;
    border: 0;
    border-radius: 2px;
    width: 40%;
    height: 42px;
    font-size: 16px;
    font-weight: bold;
    background: #23231f;
    color: #fff;
    text-decoration: none;

    cursor: pointer;
    transition: 0.5s;
  }

  .buttons a:hover {
    background: #4e4e4b;
  }

  header {
    border-bottom: 1px solid #ddd;
    width: 100%;
    text-align: center;
    padding-bottom: 10px;
    font-size: 24px;
    font-weight: bold;

    .icons {
      margin: 0 16px;
      cursor: pointer;
    }
  }
`;
