import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HooksExample/pokedex/page/HomePage";
import PokemonDetails from "./HooksExample/pokedex/page/PokemonDetails";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    // <div>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Layout />}>
    //         <Route index element={<ShinchanFnadom />} />
    //         <Route path="character/:name" element={<CharacterDetail />} />
    //         <Route path="contact" element={<Contact />} />
    //         <Route path="about" element={<About />} />
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    // </div>

    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="pokemon/:id" element={<PokemonDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
