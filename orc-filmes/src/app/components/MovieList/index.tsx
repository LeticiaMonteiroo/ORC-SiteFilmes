'use client';

import { useEffect, useState } from 'react';
import './index.scss'
import axios from 'axios'
import MovieCard from '../MovieCard';
import { Movie } from '@/app/types';

export default function MovieList(){
    const[movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {

        getMovies();

    }, []);

    const getMovies = () =>{

        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params:{
            api_key: '361954fabb87bede3115aaf94825a482',
            language: 'pt-BR'
            }
        }).then(response => {
            setMovies(response.data.results);


        })
    }




    return (

        <ul className="MovieList">
            {movies.map((movie) =>

            <MovieCard 
            key= {movie.id} 
            movie={movie}
            />
        
)}
        </ul>
    );
}