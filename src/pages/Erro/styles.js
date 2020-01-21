import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 30px;
    font-weight: bold;
  }
  .row {
    margin: 10px auto;
    display: flex;
  }

  .row a {
    margin-left: 14px;
    text-decoration: none;
    font-size: 16px;
  }
`;
