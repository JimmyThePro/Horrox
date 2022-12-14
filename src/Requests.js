const key = '03526a361dbbb2a0c7d336b8ce32f132';

const requests = {
    requestPopular: `https://api.themoviedb.org/3/search/movie/?api_key=${key}&language=en-US&query=horror&page=sort_by=popularity.desc&include_adult=false`,
    requestHorror: `https://api.themoviedb.org/3/search/movie/?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/search/movie/?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
};

export default requests;
