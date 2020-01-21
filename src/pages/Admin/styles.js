import styled from "styled-components";

export const Container = styled.div`
  margin: 80px auto 0;
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
      font-size: 14px;
      color: #23231f;
      font-weight: bold;
      margin-bottom: 8px;
    }

    input {
      margin-bottom: 20px;
      border: 1px solid #ddd;
      border-radius: 2px;
      height: 45px;
      padding: 0 15px;
      font-size: 16px;
    }

    button.btn {
      border: 0;
      border-radius: 2px;
      width: 100%;
      height: 42px;
      padding: 0 20px;
      font-size: 16px;
      font-weight: bold;
      background: #23231f;
      color: #fff;
      cursor: pointer;
    }

    button.btn:hover {
      background: #23232f;
    }

    a {
      margin: 12px 0;
      text-decoration: none;
      text-align: center;
    }
  }
`;
