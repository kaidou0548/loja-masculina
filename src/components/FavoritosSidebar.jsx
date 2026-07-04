import { useEffect, useState } from "react";

function FavoritosSidebar() {

    const [favoritos, setFavoritos] =
        useState([]);

    useEffect(() => {

    carregarFavoritos();

    window.addEventListener(
        "favoritosAtualizados",
        carregarFavoritos
    );

    return () => {

        window.removeEventListener(
            "favoritosAtualizados",
            carregarFavoritos
        );

    };

}, []);

function carregarFavoritos() {

    const lista =
        JSON.parse(
            localStorage.getItem(
                "favoritos"
            )
        ) || [];

    setFavoritos(lista);

}

    return (

        <div className="favoritos-sidebar">

            <h3>Favoritos</h3>

            {favoritos.length === 0 ? (

                <p>
                    Nenhum favorito.
                </p>

            ) : (

                favoritos.map(produto => (

                    <div
                        key={produto.id}
                        className="favorito-item"
                    >

                        {produto.nome}
                        <button
                             className="btn-remover"  onClick={() =>
                                removerFavorito(produto.id)
                            }
                        >
                            Remover
                        </button>

                    </div>

                ))
                    

            )}

        </div>

    );
    
    function removerFavorito(id){
    
        const novaLista =
            favoritos.filter(
                item => item.id !== id
            );
        
        localStorage.setItem(
            "favoritos",
            JSON.stringify(novaLista)
        );
            window.dispatchEvent(
            new Event("favoritosAtualizados")
        );
    }
}


export default FavoritosSidebar;