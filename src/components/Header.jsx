import { useDarkMode } from "./darkModeContext.jsx";
import "../styles/Header.scss";

function Header() {
  const { darkMode } = useDarkMode();

  return (
    <header className={!darkMode ? "lightMode" : ""}>
      <h1>Theodore Abitbol</h1>
      <h2>Full-stack Developper</h2>
      <p>I build engaging and reactive websites</p>
    </header>
  );
}

export default Header;
