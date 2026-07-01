import qrCode from "/imagens/qrcode.png";

function QrCodePagamento() {

    return (

        <div className="qr-container">

            <h2>Pagamento via PIX</h2>

            <img
                src={qrCode}
                alt="QR Code PIX"
                className="qr-image"
            />

            <p>
                Escaneie o QR Code para finalizar o pagamento.
            </p>

            <button
                onClick={confirmarPix}
            >
                Já Realizei o Pagamento
            </button>

        </div>

    );
}


function confirmarPix(){

    localStorage.removeItem(
        "carrinho"
    );

    alert(
        "Pagamento PIX confirmado!"
    );

    window.location.reload();
}


export default QrCodePagamento;