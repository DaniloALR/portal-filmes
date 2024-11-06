import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard";

function MovieListPage() {
    const [search, setSearch] = useState("");
    const [filmes, setFilmes] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setTimeout(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=dfe71aa6c18663df6bca1d802ada547f&language=pt-BR")
        .then(res => res.json())
        .then(data => setFilmes(data.results))
        .catch(err => console.error(err))
        .finally(() => setIsLoading(false))
    }, 5000)
    }, []);


    const handleSearch = (e) => {
        setSearch(e.target.value);
        console.log(search);
    };

    const filmesFiltrados = filmes.filter((filme) =>
        filme.title.toLowerCase().includes(search.toLocaleLowerCase())
    );

    return (
        <div className="min-h-scree flex flex-col items-center p-5">
            <h1 className="text-3xl font-bold mb-4">Veja o catálogo completo de filmes</h1>
            <input
                className="w-full  text-black max-w-md p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                type="text"
                name="search"
                id="search"
                value={search}
                onChange={handleSearch}
                placeholder="Buscar filmes..."
            />
            <section className="flex flex-wrap justify-between gap-4">
                {
                    isLoading ? <p>Carregando...</p>
                    :
                    filmesFiltrados.length > 0 ? 
                        filmesFiltrados
                        .map(filme => (
                            <MovieCard key={filme.id} {...filme}/>
                        ))
                    :
                    <p>Filme não encontrado</p>
                }
            </section>
        </div>
    );
}

export default MovieListPage;