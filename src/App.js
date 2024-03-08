import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonDetails from "./page/PokemonDetails";
import HomePage from "./page/HomePage";
import NotFound from "./page/NotFound";
import Layout from "./layout/Layout";
import ContactUsPage from "./page/ContactUsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path=":pageNo">
            <Route index element={<HomePage />} />
            <Route path="pokemon/:id" element={<PokemonDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="contactUs" element={<ContactUsPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
