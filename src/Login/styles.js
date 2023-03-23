import styled from "styled-components";

export const ContainerLogin = styled.section``;

export const Background = styled.div`
  background: #301b52;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px;

`;

export const Text = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 58px;
  line-height: 56px;
  color: #ffffff;
  width: 200px;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const FormBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  h1 {
    font-weight: 700;
    font-size: 40px;
    line-height: 28px;
    color: #301b52;
    text-align: center;
    margin-top: 25px;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 25px;
  a {
    margin-top: 20px;
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    color: #301b52;
  }
  input {
    width: 80%;
    padding: 20px;
    background: #f7f7f7;
    border: 1px solid #828282;
    margin-bottom: 15px;
  }
  input:hover {
    border: 1px solid #301b52;
  }
`;

export const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const Btn = styled.button`
  width: 100px;
  height: 30px;
  background: ${(props) => props.bg};
  border: none;
  color: #fff;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  border-radius: 5px;
  margin-left: 20px;
  margin-right: 20px;
  transition: all 0.5s ease;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  @media (min-width: 1200px) {
    width: 200px;
    height: 50px;
  }
`;
