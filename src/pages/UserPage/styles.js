import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  main {
    margin-left: 30px;
  }

  aside strong {
    font-size: 20px;
    text-align: center;
    display: block;
    color: #333;
  }

  main {
    flex: 1;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    main {
      margin-top: 30px;
    }

    aside {
      width: 100%;
    }
  }
`;
