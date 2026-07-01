import { useState } from "react";

function CartaoForm() {

    const [nome, setNome] = useState("");
    const [numero, setNumero] = useState("");
    const [validade, setValidade] = useState("");
    const [cvv, setCvv] = useState("");

    function finalizarCompra() {

        if (
            !nome ||
            !numero ||
            !validade ||
            !cvv
        ) {
            alert("Preencha todos os campos");
            return;
        }

        localStorage.removeItem("carrinho");

        alert(
            "Compra realizada com sucesso!"
        );

        window.location.reload();
    }

    return (

        <div className="cartao-form">

            <h2>Pagamento com Cartão</h2>

            <input
                type="text"
                placeholder="Nome impresso no cartão"
                value={nome}
                onChange={(e) =>
                    setNome(e.target.value)
                }
            />

            <input
                type="text"
                placeholder="Número do cartão"
                value={numero}
                onChange={(e) =>
                    setNumero(e.target.value)
                }
            />

            <input
                type="text"
                placeholder="Validade (MM/AA)"
                value={validade}
                onChange={(e) =>
                    setValidade(e.target.value)
                }
            />

            <input
                type="text"
                placeholder="CVV"
                value={cvv}
                onChange={(e) =>
                    setCvv(e.target.value)
                }
            />

            <button
                onClick={finalizarCompra}
            >
                Confirmar Pagamento
            </button>

        </div>
    );
}

export default CartaoForm;