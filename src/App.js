import ThemeChange from "./Hooks/context/theme/ThemeChange";
import UseOfThemeContext from "./Hooks/context/theme/UseOfThemeContext";

function App() {
  return (
    <UseOfThemeContext>
      <ThemeChange />
    </UseOfThemeContext>
  );
}

export default App;
