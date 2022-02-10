import './NavBarButton.scss';
import { useNavigate } from 'react-router';

export default function NavBarButton(props) {
  let navigate = useNavigate();
  return (
    <div className="navButton" onClick={()=>{navigate(props.link)}}>
      {props.children}
    </div>
  );
}