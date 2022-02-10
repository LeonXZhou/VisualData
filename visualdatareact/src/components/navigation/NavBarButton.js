import './NavBarButton.scss';

export default function NavBarButton(props){
  return (<div className="navButton">{props.children}</div>);
}