import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FavoritosSidebar from "../components/FavoritosSidebar";
import ProductCard from "../components/ProductCard";

import produtos from "../data/produtos";

function Produtos() {

    const [busca, setBusca] = useState("");
    const [categoria, setCategoria] = useState("");

    const produtosFiltrados = produtos.filter((produto) => {

        const correspondeBusca =
            produto.nome
                .toLowerCase()
                .includes(busca.toLowerCase()) ||

            produto.categoria
                .toLowerCase()
                .includes(busca.toLowerCase());

        const correspondeCategoria =
            categoria === "" ||
            produto.categoria === categoria;

        return (
            correspondeBusca &&
            correspondeCategoria
        );
    });

    return (
        <>
            <Navbar />

            <div className="container">

                <h1>
                    Nossos Produtos
                </h1>

                <div className="filtros">

                    <input
                        type="text"
                        placeholder="Pesquisar produto..."
                        value={busca}
                        onChange={(e) =>
                            setBusca(e.target.value)
                        }
                    />

                    <select
                        value={categoria}
                        onChange={(e) =>
                            setCategoria(e.target.value)
                        }
                    >
                        <option value="">
                            Todas as Categorias
                        </option>

                        <option value="Camisa">
                            Camisa
                        </option>

                        <option value="Calça">
                            Calça
                        </option>

                        <option value="Gravata">
                            Gravata
                        </option>

                        <option value="Sapato">
                            Sapato
                        </option>

                        <option value="Conjunto">
                            Conjunto
                        </option>

                        <option value="Terno/Blazer">
                            Terno/Blazer
                        </option>

                    </select>

                </div>

                <div className="grid-produtos">

                    {produtosFiltrados.map((produto) => (

                        <ProductCard
                            key={produto.id}
                            produto={produto}
                        />

                    ))}

                </div>

                <FavoritosSidebar />

            </div>

            <Footer />
        </>
    );
}

export default Produtos;