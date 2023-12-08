import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'

const Header = () => {
  return (
    <HeaderContainer>
      <span>logo</span>
      <nav>
        <NavLink to="" title="timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="timer">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

export default Header
