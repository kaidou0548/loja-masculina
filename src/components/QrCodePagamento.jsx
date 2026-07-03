import qrcode from "../../public/imagens/qrcode.png";


function QrCodePagamento() {

    return (

        <div >
<br/>
            <h2>Pagamento via PIX</h2>

            <img
                src={qrcode}
                alt="QR Code PIX"
                className="qr-image"
            />

            <p>
                Escaneie o QR Code para finalizar o pagamento.
            </p>
            <button 
                className="btn-remover"  onClick={confirmarPix}
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