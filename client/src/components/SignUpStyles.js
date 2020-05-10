import styled from 'styled-components';

export const SignUpContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 700px) {
    width: 100%;
    padding: 0 20px;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;