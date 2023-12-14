import styled from 'styled-components';

export const FormContainer = styled.div`
  align-items: center;
  color: ${(props) => props.theme['gray-100']};
  display: flex;
  flex-wrap: wrap;
  font-size: 1.125rem;
  font-weight: bold;
  gap: 0.5rem;
  justify-content: center;
  width: 100%;
`;

export const BaseInput = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  color: ${(props) => props.theme['gray-100']};
  font-size: inherit;
  font-weight: bold;
  height: 2.5rem;
  padding: 0 0.5rem;

  &:focus {
    border-color: ${(props) => props.theme['green-500']};
    box-shadow: none;
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  } // remove setinha do input
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;
