import React from 'react';

import { Container } from './styles';
import { Link } from 'react-router-dom'

export default function WeekAnimes({ list }) {
    return (
        <Container>
            <ul>
                <li>
                    <header>Segunda</header>
                    {
                        list.map(anime => anime.pos === 1 ? <Link to={`/anime/${anime.id}`} key={anime.id}>
                        <img src={anime.img} alt={anime.title} />
                      </Link> : null)
                    }
                </li>
                <li>
                    <header>Terça</header>
                    {
                        list.map(anime => anime.pos === 2 ? <Link to={`/anime/${anime.id}`} key={anime.id}>
                        <img src={anime.img} alt={anime.title} />
                      </Link> : null)
                    }
                </li>
                <li>
                    <header>Quarta</header>
                    {
                        list.map(anime => anime.pos === 3 ? <Link to={`/anime/${anime.id}`} key={anime.id}>
                        <img src={anime.img} alt={anime.title} />
                      </Link> : null)
                    }
                </li>
                <li>
                    <header>Quinta</header>
                    {
                        list.map(anime => anime.pos === 4 ? <Link to={`/anime/${anime.id}`} key={anime.id}>
                        <img src={anime.img} alt={anime.title} />
                      </Link> : null)
                    }
                </li>
                <li>
                    <header>Sexta</header>
                    {
                        list.map(anime => anime.pos === 5 ? <Link to={`/anime/${anime.id}`} key={anime.id}>
                        <img src={anime.img} alt={anime.title} />
                      </Link> : null)
                    }
                </li>
                <li>
                    <header>Sabado</header>
                    {
                        list.map(anime => anime.pos === 6 ? <Link to={`/anime/${anime.id}`} key={anime.id}>
                        <img src={anime.img} alt={anime.title} />
                      </Link> : null)
                    }
                </li>
                <li>
                    <header>Domingo</header>
                    {
                        list.map(anime => anime.pos === 7 ? <Link to={`/anime/${anime.id}`} key={anime.id}>
                        <img src={anime.img} alt={anime.title} />
                      </Link> : null)
                    }
                </li>
            </ul>
        </Container>
    );
}


