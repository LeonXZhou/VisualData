import './NavBarDropDown.scss';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export default function NavBarDropDown(props) {
  let navigate = useNavigate();
  let [dropDownState, setDropDownState] = useState(false);

  return (
    <>
      <div className="navButton" onClick={() => { navigate(props.link) }}
        onMouseEnter={() => { setDropDownState(true) }}
        onMouseLeave={() => { setDropDownState(false) }}>
        {props.children}
      </div>
      {dropDownState &&
        <div>
          asdf
        </div>
      }
    </>
  );
}