import styled from "styled-components";

export const Container = styled.div`
  .anime-dia ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    list-style: none;
    align-items: center;
    justify-content: center;
  }

  .error {
    width: 1200px;
    margin: 40px auto;
    text-align: center;
    justify-content: center;
    align-items: center;
    background: transparent;
  }

  .error p {
    font-size: 20px;
    color: #dcdcdc;
  }

  @media (max-width: 750px) {
    .anime-dia ul {
      grid-template-columns: 1fr;
    }
  }

  .anime-dia li {
    

    border-radius: 2px;
    padding: 20px;
  }

  .anime-dia img {
    width: 200px;
    height: 300px;
    border-radius: 4px;
    box-shadow: 14px 4px 14px 8px rgba(0, 0, 0, 0.4);
  }
`;
