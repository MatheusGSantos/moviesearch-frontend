import styled from 'styled-components';
import { shade } from 'polished';

import logInBackgroundImg from '../../assets/sign-up-bg.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  width: 100%;
  max-width: 700px;

  > h1 {
    color: #a92222;
    font-weight: 500;
    font-size: 4.5rem;
  }

  form {
    margin: 60px 0 80px;
    width: 340px;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-bottom: 32px;
    }
  }

  > a {
    color: #a92222;
    margin-top: 24px;
    font-size: 1.2rem;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#a92222')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${logInBackgroundImg}) no-repeat;
  background-size: cover;
`;
