import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",

    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjBlYWE5MzIwMDY3NzkzNmFiM2I4MGMzY2EzYjVmNyIsIm5iZiI6MTczNjc4ODQ5MS43NjMsInN1YiI6IjY3ODU0YTBiYzgxYWNhYTYzZGJjMGU0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dOfGk1KuUe-LAYDxIbKx6kWvBj2pyCHEExbXQldk4nw'
    },
});

export default api;
//https://api.themoviedb.org/3/person/popular
//https://api.themoviedb.org/3/genre/movie/list