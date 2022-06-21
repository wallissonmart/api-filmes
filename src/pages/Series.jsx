import styled from "styled-components";
import APIKey from "../config/APIKey";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  h1 {
    text-align: center;
    margin: 4rem 0;
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: ${(p) =>
      `repeat(auto-fit, minmax(${p.minWidth || "200px"}, 2fr))`};
    column-gap: 3rem;
    row-gap: 4rem;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 180px;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }

  span {
    font-weight: bold;
    font-size: 120%;
    text-align: center;
    padding: 0.2rem;
  }

  a {
    transition: all 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }
`;

const Series = () => {
  const [series, setSeries] = useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${APIKey}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => setSeries(data.results));
  }, []);

  function separator(numb) {
    let str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return str.join(".");
  }

  return (
    <Container>
      <h1>SÉRIES DO MOMENTO</h1>
      <ul>
        {series.map((serie) => {
          return (
            <li key={serie.id}>
              <Link to={`/details/series/${serie.id}`}>
                <img
                  src={`${image_path}${serie.poster_path}`}
                  alt={serie.name}
                />
              </Link>
              <span>{serie.name}</span>
              <span>
                {serie.popularity ? `👁‍🗨 ${separator(serie.popularity)}` : "---"}
              </span>
              <span>
                {serie.vote_average ? `⭐️ ${serie.vote_average}` : `---`}
              </span>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Series;
