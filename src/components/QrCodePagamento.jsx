import produtos from "../data/produtos";


function QrCodePagamento() {

    return (

        <div >
<br/>
            <h2>Pagamento via PIX</h2>

            <img
                src={produtos.find(e => e.id == 23).imagem}
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