import styled from "styled-components";

export const Container = styled.div`
  background: #23231f;
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    margin-right: 18px;
    font-size: 26px;
    color: #fff;
    font-weight: bold;
    text-decoration: none;
  }
  .logo a {
    display: flex;
    align-items: center;
  }

  .logo img {
    height: 50px;
    width: 50px;
    margin-left: 18px;
  }

  .menu-admin {
    display: flex;
    align-items: center;
  }

  .menu-admin a {
    font-weight: 400;
    padding: 0 10px;
  }

  @media (max-width: 865px) {
    justify-content: center;
    a {
      font-size: 14px;
      margin-right: 8px;
      font-weight: 400;
    }
  }
`;
