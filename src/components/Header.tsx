import React, { useState } from 'react';
import { FiSun } from "react-icons/fi";
import { BsMoonStars } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../techLayer/actions';
import { AiFillCode } from "react-icons/ai";
import store from '../techLayer/store';
import '../styles/Header.scss';

function Header() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const [localIsDarkMode, setLocalIsDarkMode] = useState(isDarkMode);

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode());
    const updatedIsDarkMode = !localIsDarkMode;
    setLocalIsDarkMode(updatedIsDarkMode);
    console.log('isDarkMode true or false:', updatedIsDarkMode);
  };

  return (
    <header>
      <div className='headerName'>
        <AiFillCode className='nameIcon' />
        <h1>Theodore's portefolio</h1>
      </div>
      <div id="darkmode">
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          checked={!localIsDarkMode} // Set the checkbox state based on local state
          onChange={handleDarkModeToggle}
        />
        <label htmlFor="checkbox" className="label">
          <FiSun color="yellow" />
          <BsMoonStars color="grey" />
          
          <div className="ball"></div>
        </label>
      </div>
    </header>
  );
}

export default Header;
