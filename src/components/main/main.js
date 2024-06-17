import { useState, useEffect } from "react";
import axios from 'axios';
import * as U from "../styles"
export default function Main() {
    const [filmes, setFilmes] = useState([])
    const [fundo, setFundo] = useState([])

    useEffect(() => {
        getFilmes()

    })

    const getFilmes = async () => {
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-BR&page=1').then(resposta => {
            const allApi = resposta.data.results.map((item) => {
                return {
                    ...item,
                    poster: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
                }
            })
            setFilmes(allApi)
            setFundo(arrayAntiga => arrayAntiga = filmes.slice(0, 1))
        })

    }

    return (
        <U.ContainerMain background={fundo.map(item => item.poster)} id="main">
            {fundo.map(item => (
                <U.BoxTitle>
                    <U.Name>Name:{item.title}</U.Name>
                    <h2>Lançamento:{item.release_date}</h2>
                    <h2>Avaliação:{item.vote_average}</h2>
                    <U.Sinopse>Sinopse:{item.overview}</U.Sinopse>
                </U.BoxTitle>
            ))}
        </U.ContainerMain>
    )
}