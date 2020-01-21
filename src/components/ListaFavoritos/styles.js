import styled from "styled-components";

export const Container = styled.div`
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    list-style: none;
  }

  @media (max-width: 650px) {
    ul {
      grid-template-columns: 1fr;
    }
  }
  li.fav-item {
    background: #ffffff;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.04);
    border-radius: 2px;
    padding: 20px;
  }

  li.fav-item header {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  li.fav-item header img {
    max-width: 100px;
    margin: 10px 10px;
  }

  li.fav-item header .user-info {
    margin-left: 10px;
  }

  li.fav-item p {
    color: #666;
    font-size: 14px;
    line-height: 20px;
    margin: 10px 0;
  }

  li.fav-item a {
    color: #0000ff;
    font-size: 14px;
    text-decoration: none;
    text-align: right;
  }

  li.fav-item a:hover {
    color: #5a2ea6;
  }

  .anime-info strong {
    display: block;
    font-size: 16px;
    color: #333333;
    margin: 0 8px;
  }

  .anime-info span {
    font-size: 13px;
    color: #999;
    margin: 2px 8px;
  }

  .acoes {
    display: flex;
    justify-content: flex-end;

    button {
      margin: 0 10px;
      background: transparent;
      border: none;
      font-size: 14px;
      color: #f00000;
      cursor: pointer;
    }

    button:hover {
      color: #5a2ea6;
    }
  }
`;
