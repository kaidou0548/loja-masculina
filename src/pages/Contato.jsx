import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contato() {

    const [aba, setAba] =
        useState("contato");

    const [nome, setNome] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [tipo, setTipo] =
        useState("Reclamação");

    const [mensagem, setMensagem] =
        useState("");

    function enviarFormulario(e) {

        e.preventDefault();

        if (nome.trim().length < 3) {

            alert(
                "Informe um nome válido."
            );

            return;
        }

        if (
            aba === "contato" &&
            !email.includes("@")
        ) {

            alert(
                "Informe um e-mail válido."
            );

            return;
        }

        if (
            mensagem.trim().length < 10
        ) {

            alert(
                "A mensagem deve possuir pelo menos 10 caracteres."
            );

            return;
        }

        alert(
            "Mensagem enviada com sucesso!"
        );

        setNome("");
        setEmail("");
        setMensagem("");
        setTipo("Reclamação");
    }

    return (

        <>
            <Navbar />

            <div className="container">

                <h1>
                    Fale Conosco
                </h1>

                <div className="abas">

                    <button
                        onClick={() =>
                            setAba("contato")
                        }
                    >
                        Contato
                    </button>

                    <button
                        onClick={() =>
                            setAba("ouvidoria")
                        }
                    >
                        Ouvidoria
                    </button>

                </div>

                {aba === "contato" && (

                    <form
                        className="formulario"
                        onSubmit={enviarFormulario}
                    >

                        <input
                            type="text"
                            placeholder="Nome"
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
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) =>
                                setEmail(
                                    e.target.value
                                )
                            }
                            required
                        />

                        <textarea
                            placeholder="Mensagem"
                            value={mensagem}
                            onChange={(e) =>
                                setMensagem(
                                    e.target.value
                                )
                            }
                            required
                            minLength={10}
                            maxLength={300}
                        />

                        <button
                            type="submit"
                        >
                            Enviar
                        </button>

                    </form>

                )}

                {aba === "ouvidoria" && (

                    <form
                        className="formulario"
                        onSubmit={enviarFormulario}
                    >

                        <input
                            type="text"
                            placeholder="Nome"
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

                        <select
                            value={tipo}
                            onChange={(e) =>
                                setTipo(
                                    e.target.value
                                )
                            }
                        >

                            <option>
                                Reclamação
                            </option>

                            <option>
                                Sugestão
                            </option>

                            <option>
                                Elogio
                            </option>

                        </select>

                        <textarea
                            placeholder="Mensagem"
                            value={mensagem}
                            onChange={(e) =>
                                setMensagem(
                                    e.target.value
                                )
                            }
                            required
                            minLength={10}
                            maxLength={300}
                        />

                        <button
                            type="submit"
                        >
                            Enviar
                        </button>

                    </form>

                )}

            </div>

            <Footer />

        </>

    );

}

export default Contato;