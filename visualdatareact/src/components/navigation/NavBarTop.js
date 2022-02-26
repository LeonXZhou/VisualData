import './NavBar.scss';
import NavBarButton from './NavBarButton';
import NavBarDropDown from './NavBarDropDown';

export default function NavBarTop() {
  return (
    <nav className="top">
      <div className="left">
        <NavBarButton link={'/'}>
          VISUAL DATA
        </NavBarButton>
        <NavBarButton link={'/data'}>
          Linear Regression
        </NavBarButton>
        {/* <NavBarDropDown>
          dropdown
        </NavBarDropDown> */}
      </div>
    </nav>
  );
}