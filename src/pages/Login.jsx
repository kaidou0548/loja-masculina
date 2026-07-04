import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CadastroModal from "../components/CadastroModal";

import usuarios from "../data/usuarios";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] =
        useState("");

    const [senha, setSenha] =
        useState("");

    const [erro, setErro] =
        useState("");

    const [mostrarCadastro,
        setMostrarCadastro] =
        useState(false);

    function fazerLogin(e) {

        e.preventDefault();

        if (email.trim() === "") {

            setErro(
                "Informe o e-mail."
            );

            return;
        }

        if (!email.includes("@")) {

            setErro(
                "Informe um e-mail válido."
            );

            return;
        }

        if (senha.trim() === "") {

            setErro(
                "Informe a senha."
            );

            return;
        }

        if (senha.length < 6) {

            setErro(
                "A senha deve possuir pelo menos 6 caracteres."
            );

            return;
        }

        const usuario = usuarios.find(

            (u) =>

                u.email === email &&
                u.senha === senha

        );

        if (usuario) {

            localStorage.setItem(

                "usuarioLogado",

                JSON.stringify(usuario)
                

            );
            
            window.dispatchEvent(
    new Event("navbarAtualizada")
);

            setEmail("");
            setSenha("");
            setErro("");

            navigate("/produtos");

        }

        else {

            setErro(

                "E-mail ou senha inválidos."

            );

        }

    }

    return (

        <>

            <Navbar />

            <div className="login-container">

                <form
                    className="login-form"
                    onSubmit={fazerLogin}
                >

                    <h1>
                        Login
                    </h1>

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {

                            setEmail(
                                e.target.value
                            );

                            setErro("");

                        }}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => {

                            setSenha(
                                e.target.value
                            );

                            setErro("");

                        }}
                        required
                        minLength={6}
                    />

                    {erro && (

                        <p className="erro-login">

                            {erro}

                        </p>

                    )}

                    <button
                        type="submit"
                    >
                        Entrar
                    </button>

                    <p>
                        Não possui conta?
                    </p>

                    <button
                        type="button"
                        onClick={() =>
                            setMostrarCadastro(true)
                        }
                    >
                        Cadastrar
                    </button>

                </form>

            </div>

            {mostrarCadastro && (

                <CadastroModal
                    fecharModal={() =>
                        setMostrarCadastro(false)
                    }
                />

            )}

            <Footer />

        </>

    );

}

export default Login;