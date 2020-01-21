import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 30px auto;

  main {
    flex: 1;
  }

  main ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    list-style: none;
  }
  @media (max-width: 780px) {
    main ul {
      grid-template-columns: 1fr;
      margin-right: 14px;
    }
  }

  li.anime-item {
    background: #ffffff;
    border-radius: 2px;
    padding: 20px;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  li.anime-item header {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  li.anime-item header img {
    width: 100px;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.5);
    margin-right: 10px;
    border-radius: 5px;
  }

  li.anime-item header .anime-info {
    margin-left: 10px;
  }

  li.anime-item p {
    color: #666;
    font-size: 14px;
    line-height: 20px;
    margin: 10px 0;
  }

  .anime-info {
    display: flex;
    flex-direction: column;
  }

  .anime-info strong {
    display: block;
    font-size: 16px;
    color: #333333;
  }

  .anime-info span {
    font-size: 13px;
    color: #999;
    margin-top: 2px;
  }

  .buttons {
    display: flex;
    margin: 10px 8px;
  }
  .buttons button {
    margin-left: 10px;
    border: none;
    color: white;
    padding: 10px 24px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    transition-duration: 0.4s;
  }

  .btnEditar {
    background: #20bd08;
  }

  .btnEditar:hover {
    background: transparent;
    color: #000;
    border: 2px solid #20bd08;
  }

  .btnDelete {
    background: #c20808;
  }

  .btnDelete:hover {
    background: transparent;
    color: black;
    border: 2px solid #c20808;
  }
`;
