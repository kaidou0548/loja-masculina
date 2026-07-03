import { useState } from "react";

function CadastroModal({ fecharModal }) {

    const [nome, setNome] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [senha, setSenha] =
        useState("");

    const [confirmarSenha,
        setConfirmarSenha] =
        useState("");

    const [erro, setErro] =
        useState("");

    function cadastrar(e) {

        e.preventDefault();

        if (nome.trim().length < 3) {

            setErro(
                "O nome deve possuir pelo menos 3 caracteres."
            );

            return;
        }

        if (!email.includes("@")) {

            setErro(
                "Informe um e-mail válido."
            );

            return;
        }

        if (senha.length < 6) {

            setErro(
                "A senha deve possuir pelo menos 6 caracteres."
            );

            return;
        }

        if (senha !== confirmarSenha) {

            setErro(
                "As senhas não coincidem."
            );

            return;
        }

        alert(
            "Cadastro simulado com sucesso!\n\nEste projeto utiliza usuários fictícios pré-cadastrados.\nUtilize um dos usuários disponíveis para realizar o login."
        );

        setNome("");
        setEmail("");
        setSenha("");
        setConfirmarSenha("");
        setErro("");

        fecharModal();
    }

    return (

        <div className="modal-overlay">

            <div className="modal">

                <h2>
                    Cadastro
                </h2>

                <form
                    onSubmit={cadastrar}
                >

                    <input
                        type="text"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => {

                            setNome(
                                e.target.value
                            );

                            setErro("");

                        }}
                        required
                        minLength={3}
                        maxLength={60}
                    />

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

                    <input
                        type="password"
                        placeholder="Confirmar Senha"
                        value={confirmarSenha}
                        onChange={(e) => {

                            setConfirmarSenha(
                                e.target.value
                            );

                            setErro("");

                        }}
                        required
                    />

                    {erro && (

                        <p
                            className="erro-login"
                        >
                            {erro}
                        </p>

                    )}

                    <button
                        type="submit"
                    >
                        Cadastrar
                    </button>

                    <button
                        type="button"
                        className="btn-fechar"
                        onClick={fecharModal}
                    >
                        Cancelar
                    </button>

                </form>

            </div>

        </div>

    );

}

export default CadastroModal;