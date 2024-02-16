import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
