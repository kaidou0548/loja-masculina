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

    function finalizarCompra() {

        if (nome.trim().length < 3) {

            alert(
                "Informe o nome impresso no cartão."
            );

            return;
        }

        if (!/^\d{16}$/.test(numero)) {

            alert(
                "O número do cartão deve possuir 16 dígitos."
            );

            return;
        }

        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(validade)) {

            alert(
                "Informe a validade no formato MM/AA."
            );

            return;
        }

        if (!/^\d{3}$/.test(cvv)) {

            alert(
                "O CVV deve possuir 3 dígitos."
            );

            return;
        }

        alert(
            "Pagamento realizado com sucesso!"
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
                onChange={(e) =>
                    setNome(
                        e.target.value
                    )
                }
                required
                minLength={3}
                maxLength={60}
            />

            <input
                type="text"
                placeholder="Número do cartão"
                value={numero}
                onChange={(e) =>

                    setNumero(

                        e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 16)

                    )

                }
                required
            />

            <input
                type="text"
                placeholder="Validade (MM/AA)"
                value={validade}
                onChange={(e) => {

                    let valor =
                        e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 4);

                    if (valor.length > 2) {

                        valor =
                            valor.slice(0, 2) +
                            "/" +
                            valor.slice(2);

                    }

                    setValidade(valor);

                }}
                required
            />

            <input
                type="password"
                placeholder="CVV"
                value={cvv}
                onChange={(e) =>

                    setCvv(

                        e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 3)

                    )

                }
                required
            />

            <button
                onClick={
                    finalizarCompra
                }
            >
                Confirmar Pagamento
            </button>

        </div>

    );

}

export default CartaoForm;