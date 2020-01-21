import styled from "styled-components";

export const Container = styled.div`
  width: 320px;
  background: #fff;
  border-radius: 2px;
  padding: 30px 20px;
  display: flex;
  align-items: center;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.1);
  .user-info {
    width: 100%;
    text-align: center;
  }

  .user-info a {
    margin-top: 18px;
  }

  img {
    max-width: 80px;
    max-height: 300px;
  }
  .icons {
    display: flex;
    justify-content: center;

    p {
      margin: 4px 8px;
    }
  }

  .buttons {
    margin: 10px 0;
    display: flex;
    flex-direction: column;

    a {
      text-decoration: none;
      color: #23231f;
      cursor: pointer;
    }

    button {
      margin: 8px 10px;
      border: none;
      background: transparent;
      font-size: 16px;
      color: #f00000;
      cursor: pointer;
    }
  }
`;
