import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AvaliacaoProduto from "./AvaliacaoProduto";

function ProductCard({ produto }) {

    const [mostrarDetalhes, setMostrarDetalhes] =
        useState(false);

    const navigate = useNavigate();

    function adicionarCarrinho() {

        const usuario =
            localStorage.getItem(
                "usuarioLogado"
            );

        if (!usuario) {

            navigate("/login");

            return;
        }

        const carrinho =
            JSON.parse(
                localStorage.getItem(
                    "carrinho"
                )
            ) || [];

        carrinho.push(produto);

        localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
        );

        window.dispatchEvent(
        new Event("navbarAtualizada")
        );

        window.dispatchEvent(
        new Event("carrinhoAtualizado")
        );

        alert("Produto adicionado ao carrinho!");
    }

    function adicionarFavorito() {

        const usuario =
            localStorage.getItem(
                "usuarioLogado"
            );

        if (!usuario) {

            navigate("/login");

            return;
        }

        const favoritos =
            JSON.parse(
                localStorage.getItem(
                    "favoritos"
                )
            ) || [];

        const existe = favoritos.find(
            item => item.id === produto.id
        );

        if (existe) {

            alert(
                "Produto já favoritado"
            );

            return;
        }

        favoritos.push(produto);

        localStorage.setItem(
            "favoritos",
            JSON.stringify(favoritos)
        );

        window.dispatchEvent(
            new Event("favoritosAtualizados")
        );

        alert(
            "Produto favoritado!"
        );
    }

    return (

        <div className="product-card">

            {produto.id === 11 && (

                <span className="badge-promocao">
                    🔥 PROMOÇÃO
                </span>

            )}

            <img
                src={produto.imagem}
                alt={produto.nome}
                className="product-image"
            />

            <div className="product-info">

                <span className="product-category">
                    {produto.categoria}
                </span>

                <h3>
                    {produto.nome}
                </h3>

                <h2>
                    R$ {produto.preco.toFixed(2)}
                </h2>

                <button
                    className="btn-detalhes"
                    onClick={() =>
                        setMostrarDetalhes(
                            !mostrarDetalhes
                        )
                    }
                >
                    {mostrarDetalhes
                        ? "Ocultar Detalhes"
                        : "Ver Detalhes"}
                </button>

                {mostrarDetalhes && (

                    <div className="detalhes-produto">

                        <p>
                            {produto.descricao}
                        </p>

                        <AvaliacaoProduto
                            produtoId={produto.id}
                        />

                        <div className="acoes-produto">

                            <button
                                className="btn-favorito"
                                onClick={adicionarFavorito}
                            >
                                ❤ Favoritar
                            </button>

                            <button
                                className="btn-carrinho"
                                onClick={adicionarCarrinho}
                            >
                                🛒 Adicionar ao Carrinho
                            </button>

                        </div>

                    </div>

                )}

            </div>

        </div>

    );
}

export default ProductCard;