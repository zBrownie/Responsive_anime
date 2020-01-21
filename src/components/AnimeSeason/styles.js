import styled from "styled-components";

export const Container = styled.div`
  .anime-season ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    list-style: none;
  }

  @media (max-width: 1050px) {
    .anime-season ul {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 750px) {
    .anime-season ul {
      grid-template-columns: 1fr;
    }
  }

  .anime-season li {
    border-radius: 2px;
    padding: 20px;
  }

  .anime-season img {
    width: 200px;
    height: 300px;
    border-radius: 4px;
    box-shadow: 14px 4px 14px 8px rgba(0, 0, 0, 0.4);
  }
`;
