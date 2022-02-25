import './NavBar.scss';
import NavBarButton from './NavBarButton';

export default function NavBarTop() {
  return (
    <nav className="top">
      <div className="left">
        <NavBarButton link={'/'}>
          VISUAL DATA
        </NavBarButton>
        <NavBarButton link={'/data'}>
          Basic Analysis
        </NavBarButton>
      </div>
    </nav>
  );
}