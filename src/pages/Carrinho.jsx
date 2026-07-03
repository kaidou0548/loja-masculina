import { useState } from "react";

function CartaoForm() {

    const [nome, setNome] =
        useState("");

    const [numero, setNumero] =
        useState("");

    const [validade, setValidade] =
        useState("");

    const [cvv, setCvv] =
        useState("");

    const [erro, setErro] =
        useState("");

    function finalizarCompra() {

        if (nome.trim().length < 3) {

            setErro(
                "Informe o nome impresso no cartão."
            );

            return;
        }

        if (!/^\d{16}$/.test(numero)) {

            setErro(
                "O número do cartão deve possuir 16 dígitos."
            );

            return;
        }

        if (validade === "") {

            setErro(
                "Selecione a validade do cartão."
            );

            return;
        }

        if (!/^\d{3}$/.test(cvv)) {

            setErro(
                "O CVV deve possuir 3 dígitos."
            );

            return;
        }

        setErro("");

        alert(
            "Compra realizada com sucesso!"
        );

        localStorage.removeItem(
            "carrinho"
        );

        setNome("");
        setNumero("");
        setValidade("");
        setCvv("");

        window.location.reload();
    }

    return (

        <div className="cartao-form">

            <h2>
                Pagamento com Cartão
            </h2>

            <input
                type="text"
                placeholder="Nome impresso no cartão"
                value={nome}
                onChange={(e) => {

                    setNome(
                        e.target.value
                    );

                    setErro("");

                }}
            />

            <input
                type="text"
                placeholder="Número do cartão"
                value={numero}
                onChange={(e) => {

                    setNumero(

                        e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 16)

                    );

                    setErro("");

                }}
            />

            <input
                type="month"
                value={validade}
                onChange={(e) => {

                    setValidade(
                        e.target.value
                    );

                    setErro("");

                }}
            />

            <input
                type="password"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => {

                    setCvv(

                        e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 3)

                    );

                    setErro("");

                }}
            />

            {erro && (

                <p className="erro-login">

                    {erro}

                </p>

            )}

            <button
                onClick={finalizarCompra}
            >
                Confirmar Pagamento
            </button>

        </div>

    );

}

export default CartaoForm;