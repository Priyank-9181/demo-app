import React from "react";
import { useTheme } from "./UseOfThemeContext";

function ThemeChange() {
  //   const [theme, setTheme] = useState("#424242");
  //   const [color, setColor] = useState("#ECEFF1");

  //   function changeTheme() {
  //     if (theme === "#424242") {
  //       setTheme("#ECEFF1");
  //       setColor("#424242");
  //     } else {
  //       setTheme("#424242");
  //       setColor("#ECEFF1");
  //     }

  const { theme, setTheme } = useTheme();

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          boxSizing: "border-box",
          backgroundColor: theme === "dark" ? "#424242" : "#ECEFF1",
          color: theme === "dark" ? "#ECEFF1" : "#424242",
          overflow: "hidden",
        }}
      >
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem enim
            quia perspiciatis eligendi culpa tempore facilis optio praesentium
            aut, explicabo magni deleniti harum vitae possimus! Ducimus
            assumenda doloremque accusamus sapiente!
          </p>
        </div>
        <div>
          <button
            onClick={() => {
              if (theme === "dark") {
                setTheme("light");
              } else {
                setTheme("dark");
              }
            }}
          >
            Change Theme
          </button>
        </div>
      </div>
    </>
  );
}

export default ThemeChange;
