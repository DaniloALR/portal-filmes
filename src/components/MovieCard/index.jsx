import { Link } from "react-router-dom";

function MovieCard({ id, title, poster_path }) {
    const handleFavorite = () => {
        let favoritos = JSON.parse(localStorage.getItem('favorites')) || [];

        const isFavorite = favoritos.some(filme => filme.id === id);
        if (isFavorite) {
            favoritos = favoritos.filter(filme => filme.id !== id);
        } else {
            favoritos.push({ id, title, poster_path });
        }

        localStorage.setItem('favorites', JSON.stringify(favoritos));
    }

    return (
        <div className="flex flex-col justify-center text-center mt-6">
            {/* <h2>{title}</h2> Exibe o título do filme */}
            <img src={`https://image.tmdb.org/t/p/w154${poster_path}`} alt={title} />
            {/* Pegando o ID do filme ao clicar */}
            <button onClick={handleFavorite}>Adicionar ao favorito</button>
            <Link to={`/movies/${id}`}>Saiba mais</Link> {/* Link para a página de detalhes */}
        </div>
    );
}

export default MovieCard;