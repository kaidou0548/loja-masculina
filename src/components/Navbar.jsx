import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


function Navbar() {
    
    const navigate = useNavigate();
    const [usuario, setUsuario] =
    useState(null);

    const [quantidadeCarrinho,
        setQuantidadeCarrinho] =
        useState(0);
    
    useEffect(() => {

    atualizarNavbar();

    window.addEventListener(
        "navbarAtualizada",
        atualizarNavbar
    );

    return () => {

        window.removeEventListener(
            "navbarAtualizada",
            atualizarNavbar
        );

    };

}, []);

function atualizarNavbar() {

    const usuarioSalvo =
        JSON.parse(
            localStorage.getItem(
                "usuarioLogado"
            )
        );

    const carrinho =
        JSON.parse(
            localStorage.getItem(
                "carrinho"
            )
        ) || [];

    setUsuario(usuarioSalvo);

    setQuantidadeCarrinho(
        carrinho.length
    );

}
    
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

    localStorage.removeItem(
        "avaliacoes"
    );

   window.dispatchEvent(
        new Event("navbarAtualizada")
    );

    window.dispatchEvent(
        new Event("favoritosAtualizados")
    );

    window.dispatchEvent(
        new Event("carrinhoAtualizado")
    );

navigate("/");


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