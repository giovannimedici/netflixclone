const API_KEY = '5ec81351a9776365b4fc5066021e58af';
const API_BASE = 'https://api.themoviedb.org/3';
const API_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZWM4MTM1MWE5Nzc2MzY1YjRmYzUwNjYwMjFlNThhZiIsInN1YiI6IjY0YmMzYmUyYzNhYTNmMDEzYTVkNWU5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GKZLpw1KQBgxSKjdm9TThFlCCoZdlMbt7XFW4XrrjJw';


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZWM4MTM1MWE5Nzc2MzY1YjRmYzUwNjYwMjFlNThhZiIsInN1YiI6IjY0YmMzYmUyYzNhYTNmMDEzYTVkNWU5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GKZLpw1KQBgxSKjdm9TThFlCCoZdlMbt7XFW4XrrjJw'
    }
  };
  
  

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default{
    getHomeList: async() => {
        return[
        {
            slug: 'originals',
            title: 'Originais do Netflix',
            items: await basicFetch(`/discover/tv?with_network=213&api_key=${API_KEY}`)
              
        },
        /*{
            slug: 'trending',
            title: 'Recomendados para Você',
            items: await basicFetch(`/trending/all/week&api_key=${API_KEY}`)
        },
        {
            slug: 'toprated',
            title: 'Em Alta',
            items: await basicFetch(`/movie/top_rated&api_key=${API_KEY}`)
        },*/
        {
            slug: 'action',
            title: 'Ação',
            items: await basicFetch(`/discover/movie?with_genres=28&api_key=${API_KEY}`)
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            items: await basicFetch(`/discover/movie?with_genres=35&api_key=${API_KEY}`)
        },
        {
            slug: 'horror',
            title: 'Terror',
            items: await basicFetch(`/discover/movie?with_genres=27&api_key=${API_KEY}`)
        },
        {
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?with_genres=10749&api_key=${API_KEY}`)
        },
        {
            slug: 'documentary',
            title: 'Documentários',
            items: await basicFetch(`/discover/movie?with_genres=99&api_key=${API_KEY}`)
        },
    ];
    },
    getMovieInfo: async(movieId, type) => {
        let info = {};

        if(movieId){
            switch(type){
                case 'movie':
                    info = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, options)
                                .then(response => response.json())
                    // .then(response => console.log(response))
                    // .catch(err => console.error(err));
                break;
                case 'tv':
                    info = await fetch(`https://api.themoviedb.org/3/tv/${movieId}`, options)
                                 .then(response => response.json())
                    // .then(response => console.log(response))
                    // .catch(err => console.error(err)); 
                    //await basicFetch(`/tv/${movieId}/`);
                break; 
                default:
                    info = null;
                break;

    
            }
        }

        return info;
    }
}
