import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import avaliacoes from "../data/avaliacoes";

function AvaliacaoProduto({ produtoId }) {

    const navigate = useNavigate();

    const usuario = JSON.parse(
        localStorage.getItem(
            "usuarioLogado"
        )
    );

    const avaliacoesSalvas =
        JSON.parse(
            localStorage.getItem(
                "avaliacoes"
            )
        ) || [];

    const [notaUsuario, setNotaUsuario] =
        useState(0);

    const [comentario, setComentario] =
        useState("");

    const [avaliacoesLocais,
        setAvaliacoesLocais] =
        useState(avaliacoesSalvas);

    const avaliacoesProduto = [

        ...avaliacoes.filter(
            avaliacao =>
                avaliacao.produtoId === produtoId
        ),

        ...avaliacoesLocais.filter(
            avaliacao =>
                avaliacao.produtoId === produtoId
        )

    ];

    const jaAvaliou = usuario
        ? avaliacoesProduto.some(
            avaliacao =>
                avaliacao.usuario === usuario.nome
        )
        : false;

    useEffect(() => {

        carregarAvaliacoes();

        window.addEventListener(
            "avaliacoesAtualizadas",
            carregarAvaliacoes
        );

        return () => {

            window.removeEventListener(
                "avaliacoesAtualizadas",
                carregarAvaliacoes
            );

        };

    }, []);

    function carregarAvaliacoes() {

        const lista =
            JSON.parse(
                localStorage.getItem(
                    "avaliacoes"
                )
            ) || [];

        setAvaliacoesLocais(lista);

    }
    
    function enviarAvaliacao() {

        if (!usuario) {

            navigate("/login");

            return;
        }

        if (
            notaUsuario === 0 ||
            comentario.trim() === ""
        ) {

            alert(
                "Escolha uma nota e escreva um comentário."
            );

            return;
        }

        const novaAvaliacao = {

            id: Date.now(),

            produtoId,

            usuario: usuario.nome,

            nota: notaUsuario,

            comentario

        };

        const novasAvaliacoes = [

            ...avaliacoesLocais,
            novaAvaliacao

        ];

        setAvaliacoesLocais(
            novasAvaliacoes
        );

        localStorage.setItem(
            "avaliacoes",
            JSON.stringify(
                novasAvaliacoes
            )
        );
        window.dispatchEvent(
            new Event("avaliacoesAtualizadas")
        );

        setComentario("");
        setNotaUsuario(0);

        alert(
            "Avaliação enviada!"
        );
    }

    return (

        <div className="avaliacao">

            <h3>
                Avaliações
            </h3>

            {avaliacoesProduto.length === 0 ? (

                <p>
                    Nenhuma avaliação ainda.
                </p>

            ) : (

                avaliacoesProduto.map(
                    avaliacao => (

                        <div
                            key={avaliacao.id}
                            className="avaliacao-item"
                        >

                            <strong>
                                {avaliacao.usuario}
                            </strong>

                            <p>
                                {"⭐".repeat(
                                    avaliacao.nota
                                )}
                            </p>

                            <p>
                                {avaliacao.comentario}
                            </p>

                        </div>

                    )
                )

            )}

            {jaAvaliou ? (

                <div className="avaliar-produto">

                    <p>
                        Você já avaliou este produto.
                    </p>

                </div>

            ) : (

                <div className="avaliar-produto">

                    <h4>
                        Avalie este produto
                    </h4>

                    <div className="estrelas">

                        {[1, 2, 3, 4, 5].map(
                            estrela => (

                                <span
                                    key={estrela}
                                    onClick={() =>
                                        setNotaUsuario(
                                            estrela
                                        )
                                    }
                                    className={
                                        estrela <= notaUsuario
                                            ? "estrela ativa"
                                            : "estrela"
                                    }
                                >
                                    ⭐
                                </span>

                            )
                        )}

                    </div>

                    <textarea
                        placeholder="Escreva sua avaliação..."
                        value={comentario}
                        onChange={(e) =>
                            setComentario(
                                e.target.value
                            )
                        }
                    />

                    <button
                        className="btn-avaliar"
                        onClick={
                            enviarAvaliacao
                        }
                    >
                        Enviar Avaliação
                    </button>

                </div>

            )}

        </div>

    );
}

export default AvaliacaoProduto;