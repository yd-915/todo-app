import styled from "styled-components";

import lightThemeIcon from "../../assets/theme-icons/lightThemeIcon.svg";
import darkThemeIcon from "../../assets/theme-icons/darkThemeIcon.svg";
import blackThemeIcon from "../../assets/theme-icons/blackThemeIcon.svg";

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";

const ThemeChagerContainer = styled.div`
  display: flex;
  flex-direction: column;

  z-index: 2;

  width: 100%;

  gap: 20px;

  #themes-box {
    display: flex;
    flex-direction: row;

    width: 100%;
    height: fit-content;

    align-items: center;
    justify-content: space-between;

    gap: 5px;
    padding: 5px 5px;

    border-radius: 10px;

    background-color: #eaedee;
  }

  .theme-item {
    display: flex;
    flex-direction: row;

    z-index: 1;

    width: 100%;
    height: 30px;

    align-items: center;
    justify-content: center;

    gap: 10px;

    border-radius: 5px;

    cursor: pointer;

    background-color: transparent;

    img,
    .theme-name {
      pointer-events: none;
    }

    :hover {
      background-color: #fff;
    }
  }

  #active-theme-indicator {
    position: absolute;

    z-index: 0;

    height: 30px;

    border-radius: 5px;

    background-color: #fff;
  }
`;

function ThemeChager() {
  const dispatch = useDispatch();

  const [indicatorX, setIndicatorX] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState();

  const handleChangeTheme = (theme, target) => {
    const start = document.getElementById("active-theme-indicator-start");

    setIndicatorX(target.offsetLeft - start.offsetLeft);
    setIndicatorWidth(target.offsetWidth);
    dispatch(changeTheme(theme));
  };

  useEffect(() => {
    const start = document.getElementById("active-theme-indicator-start");
    setIndicatorWidth(start.offsetWidth);
  }, []);

  return (
    <ThemeChagerContainer>
      <div>Theme</div>
      <div id="themes-box">
        <div
          id="active-theme-indicator-start"
          className="theme-item"
          onClick={(e) => handleChangeTheme("light", e.target)}
        >
          <img src={lightThemeIcon} alt="Light Theme" width={15} />
          <div className="theme-name">Light</div>
        </div>
        <div
          className="theme-item"
          onClick={(e) => handleChangeTheme("dark", e.target)}
        >
          <img src={darkThemeIcon} alt="Dark Theme" width={15} />
          <div className="theme-name">Dark</div>
        </div>
        <div
          className="theme-item"
          onClick={(e) => handleChangeTheme("black", e.target)}
        >
          <img src={blackThemeIcon} alt="Black Theme" width={15} />
          <div className="theme-name">Black</div>
        </div>
        <motion.div
          animate={{ x: indicatorX, width: indicatorWidth }}
          id="active-theme-indicator"
        ></motion.div>
      </div>
    </ThemeChagerContainer>
  );
}

export default ThemeChager;
