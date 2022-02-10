import './NavBar.scss'
import NavBarButton from './NavBarButton'

export default function NavBarTop() {
  return (
    <nav className="top">
      <div className="left">
        <NavBarButton>
          asdf
        </NavBarButton>
      </div>
      <div className="center">
        center
      </div>
      <div className="right">
        right
      </div>
    </nav>
  )
}