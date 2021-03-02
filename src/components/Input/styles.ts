import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #222222;
  border-radius: 10px;
  border: 2px solid #222222;
  color: #bcb0b0;
  padding: 16px;
  width: 100%;

  display: flex;
  align-items: center;

  transition: border-color 0.3s;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #a92222;
      border-color: #a92222;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #a92222;
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: white;

    &::placeholder {
      color: #bcb0b0;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
