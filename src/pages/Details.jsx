import { useParams } from "react-router-dom";
import APIKey from "../config/APIKey";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";

const Container = styled.div`
  padding: 2.5rem 0;
  h1 {
    text-align: center;
    margin: 3rem 0;
  }
  .movie {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 300px;
    border-radius: 1rem;
  }
  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 4rem;
    max-width: 50%;
  }
  button {
    background-color: #979ca0;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    font-size: 100%;
    transition: all 0.3s;
  }
  button:hover {
    background-color: #686a6d;
  }
  span {
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 110%;
  }
  .release-date {
    opacity: 0.5;
  }
  @media (max-width: 768px) {
    .movie {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      max-width: 100%;
    }
    .details {
      justify-content: center;
      align-items: center;
      max-width: 100%;
      margin-left: 0rem;
    }
    img {
      max-width: 100%;
    }
    span {
      text-align: center;
    }
  }
`;

const Details = () => {
  const { id } = useParams();
  const [movie, setMovies] = useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500";
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        const movie = {
          id,
          title: data.title,
          sinopse: data.overview
          ? data.overview
          : "Sinopse indisponível no momento :(",
          image: `${image_path}${data.poster_path}`,
          releaseDate: data.release_date.split('-').reverse().join('/'),
        };
        setMovies(movie);
        setLoading(true);
      });
  }, [id]);

  return (
    <Container>
      {loading ? (
        <div className="movie">
          <img src={movie.image} alt={movie.sinopse} />
          <div className="details">
            <h1>{movie.title}</h1>
            <span>{movie.sinopse}</span>
            <span className="release-date">
              Data de lançamento: {movie.releaseDate}
            </span>
            <Link to={`/api-filmes`}>
              <button>Voltar</button>
            </Link>
          </div>
        </div>
      ) : (
        <Loading>Carregando...</Loading>
      )}
    </Container>
  );
};

export default Details;
