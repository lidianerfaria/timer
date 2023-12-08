import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  max-width: 74rem;
  padding: 2.5rem;
`
