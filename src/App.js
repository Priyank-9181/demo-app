import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HooksExample/pokedex/page/HomePage";
import NotFound from "./HooksExample/pokedex/page/NotFound";
import PokemonDetails from "./HooksExample/pokedex/page/PokemonDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="pokemon/:id" element={<PokemonDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
