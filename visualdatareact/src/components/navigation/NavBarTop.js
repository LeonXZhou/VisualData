import './NavBar.scss';
import NavBarButton from './NavBarButton';

export default function NavBarTop() {
  return (
    <nav className="top">
      <div className="left">
        <NavBarButton>
          left
        </NavBarButton>
        <NavBarButton>
          left
        </NavBarButton>
        <NavBarButton>
          left
        </NavBarButton>
        <NavBarButton>
          left
        </NavBarButton>
        <NavBarButton>
          left
        </NavBarButton>
        <NavBarButton>
          left
        </NavBarButton>
        <NavBarButton>
          left
        </NavBarButton>
      </div>
      <div className="center">
        VISUAL DATA
      </div>
      <div className="right">
        <NavBarButton>
          right
        </NavBarButton>
      </div>
    </nav>
  );
}