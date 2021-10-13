

const API_KEY = process.env.REACT_APP_MOVIES_DB_KEY


const requests = {
    fetchTrending: `/trending/all/week?api_key=f1b8d194dba80bd94de376afc7c19763&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=f1b8d194dba80bd94de376afc7c19763&language=en-US`,
};

 
export default requests;