import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 100vh;
`;

export const Button1 = styled.button`
  color: white;
  margin: 0 1rem;
  padding: 0.5rem;

  &:hover {
    color: yellow;
    text-decoration: underline;
  }
`;
