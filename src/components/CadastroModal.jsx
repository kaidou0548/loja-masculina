function CadastroModal({ fecharModal }) {

    return (

        <div className="modal-overlay">

            <div className="modal">

                <h2>Cadastrar Usuário</h2>

                <form>

                    <input
                        type="text"
                        placeholder="Nome"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                    />

                    <input
                        type="password"
                        placeholder="Confirmar Senha"
                    />

                    <button type="submit">
                        Cadastrar
                    </button>

                </form>

                <button
                    className="btn-fechar"
                    onClick={fecharModal}
                >
                    Fechar
                </button>

            </div>

        </div>

    );
}

export default CadastroModal;