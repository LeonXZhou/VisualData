import './NavBar.scss';
import NavBarButton from './NavBarButton';

export default function NavBarTop() {
  return (
    <nav className="top">
      <div className="left">
        <NavBarButton link={'/'}>
          Home
        </NavBarButton>
        <NavBarButton link={'/data'}>
          Data
        </NavBarButton>
      </div>
      <div className="center">
        VISUAL DATA
      </div>
      {/* <div className="right">
        <NavBarButton>
          right
        </NavBarButton>
      </div> */}
    </nav>
  );
}