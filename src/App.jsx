import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home"
import Quadrinhos from "./pages/Quadrinhos";
import Livros from "./pages/Livros";
import Decoracao from "./pages/Decoracao";
import Detail from "./pages/Detail";
import "./App.css"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="quadrinhos" element={<Quadrinhos />} />
          <Route path="livros" element={<Livros />} />
          <Route path="decoração" element={<Decoracao />} />
          <Route path="detalhes/:id" element={<Detail />} />
        </Route>
      </Routes>
    </Router>
  );
}
