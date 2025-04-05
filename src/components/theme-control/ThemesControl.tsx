import { useState } from "react";
import { Themes } from "defines";

export const ThemesControl = () => {
  const [currentTheme, setCurrentTheme] = useState(Themes.LIGHT);

  const changeTheme = (theme: Themes) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <div>
      {currentTheme === Themes.DARK ? (
        <button onClick={() => changeTheme(Themes.LIGHT)}>Light</button>
      ) : (
        <button onClick={() => changeTheme(Themes.DARK)}>Dark</button>
      )}
    </div>
  );
};
