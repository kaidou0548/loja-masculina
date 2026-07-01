import { Link } from "react-router-dom";

function Navbar() {

    const usuario =
        JSON.parse(
            localStorage.getItem(
                "usuarioLogado"
            )
        );

    const quantidadeCarrinho =

        JSON.parse(
            localStorage.getItem(
                "carrinho"
            )
        )?.length || 0;

    function sair() {

        localStorage.removeItem(
            "usuarioLogado"
        );

        localStorage.removeItem(
            "carrinho"
        );

        localStorage.removeItem(
            "favoritos"
        );

        window.location.reload();
    }

    return (

        <nav className="navbar">

            <h2>
                Loja Masculina
            </h2>

            <div className="nav-links">

                <Link to="/">
                    Início
                </Link>

                <Link to="/produtos">
                    Produtos
                </Link>

                <Link to="/carrinho">

                    {quantidadeCarrinho > 0
                        ? `Carrinho (${quantidadeCarrinho})`
                        : "Carrinho"}

                </Link>

                <Link to="/contato">
                    Contato
                </Link>

                {usuario ? (

                    <>

                        <span>
                            Olá, {usuario.nome}
                        </span>

                        <button
                            className="btn-sair"
                            onClick={sair}
                        >
                            Sair
                        </button>

                    </>

                ) : (

                    <Link to="/login">
                        Login
                    </Link>

                )}

            </div>

        </nav>

    );
}

export default Navbar;