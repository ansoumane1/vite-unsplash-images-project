import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useGlobalContext } from "./context";

function ThemeToggle() {
  const { isDarkTheme, ToggleDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button onClick={ToggleDarkTheme} className="dark-toggle">
        {isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
}

export default ThemeToggle;
