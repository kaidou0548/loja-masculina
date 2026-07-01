import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import CartaoForm from "../components/CartaoForm";
import QrCodePagamento from "../components/QrCodePagamento";

function Carrinho() {

    const usuario = JSON.parse(
        localStorage.getItem(
            "usuarioLogado"
        )
    );

    const [carrinho, setCarrinho] =
        useState([]);

    const [formaPagamento,
        setFormaPagamento] =
        useState("");

    useEffect(() => {

        const lista =
            JSON.parse(
                localStorage.getItem(
                    "carrinho"
                )
            ) || [];

        setCarrinho(lista);

    }, []);

    function removerProduto(id) {

        const novaLista =
            carrinho.filter(
                item => item.id !== id
            );

        setCarrinho(novaLista);

        localStorage.setItem(
            "carrinho",
            JSON.stringify(novaLista)
        );
    }

    const total = carrinho.reduce(

        (soma, item) =>
            soma + item.preco,

        0
    );

    if (!usuario) {

        return (
            <>
                <Navbar />

                <div className="container">

                    <h1>
                        Faça login para acessar o carrinho
                    </h1>

                </div>

                <Footer />
            </>
        );
    }

    return (

        <>
            <Navbar />

            <div className="container">

                <h1>
                    Carrinho
                </h1>

                {carrinho.length === 0 ? (

                    <p>
                        Carrinho vazio.
                    </p>

                ) : (

                    <>
                        {carrinho.map((item) => (

                            <div
                                key={item.id}
                            >

                                <h3>
                                    {item.nome}
                                </h3>

                                <p>
                                    R$ {item.preco.toFixed(2)}
                                </p>

                                <button
                                    className="btn-remover" onClick={() =>
                                        removerProduto(item.id)
                                    }
                                >
                                    Remover
                                </button>

                                <hr />

                            </div>

                        ))}

                        <h2>
                            Total:
                            R$ {total.toFixed(2)}
                        </h2>

                        <h3>
                            Escolha a forma de pagamento
                        </h3>

                        <button
                           className="btn-pagamento" onClick={() =>
                                setFormaPagamento(
                                    "cartao"
                                )
                            }
                        >
                            Cartão
                        </button>

                        <button
                            className="btn-pagamento" onClick={() =>
                                setFormaPagamento(
                                    "pix"
                                )
                            }
                        >
                            PIX
                        </button>

                        {formaPagamento ===
                            "cartao" && (
                                <CartaoForm />
                            )}

                        {formaPagamento ===
                            "pix" && (
                                <QrCodePagamento />
                            )}

                    </>

                )}

            </div>

            <Footer />
        </>
    );
}

export default Carrinho;