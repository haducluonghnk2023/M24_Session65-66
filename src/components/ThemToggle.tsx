import { useDispatch, useSelector } from "react-redux";
import { themeReducer, toggleTheme } from "../store/reducers/themReducer";
import React from "react";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.themeReducer);

  console.log(theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  //   const themeStyles: React.CSSProperties = {
  //     backgroundColor: theme === "light" ? "#fff" : "#333",
  //     color: theme === "light" ? "#000" : "#fff",
  //     minHeight: "100vh",
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     flexDirection: "column",
  //   };

  return (
    <div>
      <h1>B7+8</h1>
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
      <label>
        <input
          type="checkbox"
          onChange={handleToggle}
          checked={theme === "dark"}
        />
        Dark Mode
      </label>
    </div>
  );
};

export default ThemeToggle;
