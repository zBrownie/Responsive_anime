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
  background: #fff;

  header {
    border-bottom: 1px solid #ddd;
    width: 100%;
    text-align: center;
    padding-bottom: 10px;
  }

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

    input,
    select {
      margin-bottom: 20px;
      border: 1px solid #ddd;
      border-radius: 2px;
      height: 45px;
      padding: 0 15px;
      font-size: 16px;
    }
    textarea {
      margin-bottom: 20px;
      border: 1px solid #ddd;
      border-radius: 2px;
      height: 120px;
      max-height: 120px;
      min-height: 120px;
      width: 100%;
      max-width: 100%;
      min-width: 100%;
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

    label#img {
      margin: 16px auto;
      border: 1px dashed #ddd;
      background-size: cover;
      cursor: pointer;
      height: 300px;
      min-width: 200px;
      max-width: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    label#img input {
      display: none;
    }

    label#img.has-img {
      border: 0;
    }
    label#img.has-img img {
      display: none;
    }
  }
`;
