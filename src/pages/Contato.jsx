import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contato() {

    const [aba, setAba] = useState("contato");

    return (

        <>
            <Navbar />

            <div className="container">

                <h1>Fale Conosco</h1>

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
                        />

                        <input
                            type="email"
                            placeholder="Email"
                        />

                        <textarea
                            placeholder="Mensagem"
                        />

                      <button type="submit">
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
                        />

                        <select>

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
                        />

                       <button type="submit">
                            Enviar
                        </button>

                    </form>

                )}

            </div>

            <Footer />
        </>
    );
}

function enviarFormulario(e){

    e.preventDefault();

    alert(
        "Mensagem enviada com sucesso!"
    );
}

export default Contato;