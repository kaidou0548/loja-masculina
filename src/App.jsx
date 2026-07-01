import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Carrinho from "./pages/Carrinho";
import Login from "./pages/Login";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/produtos" element={<Produtos />} />

        <Route path="/carrinho" element={<Carrinho />} />

        <Route path="/login" element={<Login />} />

        <Route path="/contato" element={<Contato />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;