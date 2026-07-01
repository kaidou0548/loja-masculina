import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import produtos from "../data/produtos";

function Home() {

    const usuario = JSON.parse(
        localStorage.getItem(
            "usuarioLogado"
        )
    );

    const promocao = produtos.find(
        produto => produto.id === 11
    );

    return (
        <>
            <Navbar />

            <section className="hero">

                <h1>
                    Elegância e praticidade para o homem moderno
                </h1>

                <p>
                    Roupas sociais para eventos, reuniões e ocasiões especiais.
                </p>

            </section>

            <section className="promocao">

                <div className="promocao-imagem">

                    <img
                        src={promocao.imagem}
                        alt={promocao.nome}
                    />

                </div>

                <div className="promocao-info">

                    <span className="selo-promocao">
                        PROMOÇÃO
                    </span>

                    <h2>
                        {promocao.nome}
                    </h2>

                    <p>
                        {promocao.descricao}
                    </p>

                    <h3>
                        De R$ 390,00 por R$ 299,90
                    </h3>

                    <div className="promocao-botoes">

                        <Link
                            to="/produtos"
                            className="btn-principal"
                        >
                            Ver Produtos
                        </Link>

                        {!usuario && (

                            <Link
                                to="/login"
                                className="btn-secundario"
                            >
                                Entrar
                            </Link>

                        )}

                    </div>

                </div>

            </section>

            <section className="destaque">

                <h2>
                    Bem-vindo à Loja Masculina
                </h2>

                <p>
                    Explore nosso catálogo de roupas elegantes.
                </p>

            </section>

            <Footer />
        </>
    );
}

export default Home;