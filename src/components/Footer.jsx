import { Link } from "react-router-dom";


function Footer() {

  const usuario = JSON.parse(
    localStorage.getItem("usuarioLogado")
  );
  return (


    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h3>Loja Masculina</h3>

          <p>
            Elegância e praticidade para o homem moderno.
          </p>
        </div>

        <div className="footer-section">
          <h3>Links</h3>
          <Link to="/">Início</Link>
          <br/>
          <Link to="/produtos">Produtos</Link>
          <br/>
          <Link to="/contato">Contatos</Link>
          {usuario?.tipo === "admin" && (
            <>
              <br />
              <Link to="/configuracoes">
                Configurações
              </Link>
            </>
          )}
        </div>

        <div className="footer-section">
          <h3>Contato</h3>

          <p>contato@lojamasculina.com</p>
          <p>(84) 99999-9999</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Loja Masculina - Todos os direitos reservados
      </div>

    </footer>
  );
}

export default Footer;