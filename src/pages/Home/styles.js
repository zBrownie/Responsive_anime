import styled from "styled-components";

export const Container = styled.div`
  main {
    flex: 1;
  }
  .App {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .App strong {
    display: block;
    font-size: 26px;
    font-weight: bold;
    line-height: 20px;
    color: #23231f;
    margin: 30px auto;
  }

  .season-title {
    margin-top: 20px;
  }
`;
