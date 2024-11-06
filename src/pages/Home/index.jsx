import { useEffect, useState } from "react";
import CardContainer from "../../components/CardContainer";
import MovieCard from "../../components/MovieCard";

function Home() {
    const [filmesPopulares, setFilmesPopulares] = useState([])
    const [filmesTrending, setFilmesTrending] = useState([])
    const [filmesUpcoming, setFilmesUpcoming] = useState([])

    const fetchMovies = async () => {
        try{
            
            const [respostaPopulares, respostaTrending, respostaUpcoming] = await Promise.all(
                [
                    fetch('https://api.themoviedb.org/3/movie/popular?api_key=c85e1cc8bcfdc70f2c18ff708230dc0f&language=pt-BR'),
                    fetch('https://api.themoviedb.org/3/trending/all/week?api_key=c85e1cc8bcfdc70f2c18ff708230dc0f&language=pt-BR'),
                    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=c85e1cc8bcfdc70f2c18ff708230dc0f&language=pt-BR')
                ]
            )

            const popularData = await respostaPopulares.json()
            const trendingData = await respostaTrending.json()
            const upcomingData = await respostaUpcoming.json()

            setFilmesPopulares(popularData.results)
            setFilmesTrending(trendingData.results)
            setFilmesUpcoming(upcomingData.results)
        }
        catch{}
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <>
            <CardContainer titulo={"Populares"}>
                {
                    filmesPopulares
                        .map(filme => (
                            <MovieCard key={filme.id} {...filme}/>
                        ))
                }
            </CardContainer>
            <CardContainer titulo={"Em Alta"}>
                {
                    filmesTrending
                        .map(filme => (
                            <MovieCard key={filme.id} {...filme}/>
                        ))
                }
            </CardContainer>
            <CardContainer titulo={"Em Breve"}>
                {
                    filmesUpcoming
                        .map(filme => (
                            <MovieCard key={filme.id} {...filme}/>
                        ))
                }
            </CardContainer>
        </>
    )
}

export default Home;