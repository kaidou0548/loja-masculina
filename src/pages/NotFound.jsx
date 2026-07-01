import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function NotFound() {

    return (

        <>
            <Navbar />

            <div
                className="container"
                style={{
                    textAlign: "center"
                }}
            >

                <h1>404</h1>

                <h2>
                    Página não encontrada
                </h2>

                <br />

                <Link
                    to="/"
                    className="btn-principal"
                >
                    Voltar para Início
                </Link>

            </div>

            <Footer />
        </>
    );
}

export default NotFound;