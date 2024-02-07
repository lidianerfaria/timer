import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      align-items: center;
      border-bottom: 3px solid transparent;
      border-top: 3px solid transparent;
      color: ${(props) => props.theme['gray-100']};
      display: flex;
      height: 3rem;
      justify-content: center;
      width: 3rem;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }
      /*&:active {
        color: ${(props) => props.theme['green-500']};
      }*/
    }
  }
`;
