const moviedb = require('moviedb')(process.env.MDB_API_KEY);

exports.getMovies = (req, res) => {
  let previousUrl;
  let nextUrl;
  let { page } = req.query;

  if (typeof page === 'string') {
    page = parseInt(page, 10);
  }

  if (!page || isNaN(page) || typeof page === 'undefined' || page <= 1) {
    page = 1;
    previousUrl = '/movies';
    nextUrl = `/movies/?page=${page + 1}`;
  } else {
    previousUrl = `/movies/?page=${page - 1}`;
    nextUrl = `/movies/?page=${page + 1}`;
  }

  // gives back paginated results for us
  moviedb.miscNowPlayingMovies({ page }, (err, mdbres) => {
    const totalPages = mdbres.total_pages;
    const pagesArray = [];
    for (let i = 1; i <= totalPages; i++) {
      pagesArray.push(i);
    }

    const options = {
      title: 'Now Playing',
      mdb: mdbres,
      page,
      previousUrl,
      nextUrl,
      totalPages,
      pagesArray,
    };

    res.render('movies/all-movies', options);
  });
};

exports.searchMovies = (req, res) => {
  let { query } = req.query;
  if (!query || typeof query === 'undefined') query = 'a';
  let previousUrl;
  let nextUrl;
  let { page } = req.query;

  if (typeof page === 'string') {
    page = parseInt(page, 10);
  }

  if (!page || isNaN(page) || typeof page === 'undefined' || page <= 1) {
    page = 1;
    previousUrl = '/movies/search/';
    nextUrl = `/movies/search?query=${query}&page=${page + 1}`;
  } else {
    previousUrl = `/movies/search?query=${query}&page=${page - 1}`;
    nextUrl = `/movies/search?query=${query}&page=${page + 1}`;
  }

  moviedb.searchMovie({ query, page }, (err, mdbres) => {
    const totalPages = mdbres.total_pages <= 50 ? mdbres.total_pages : 50;
    let splits;
    if (mdbres.total_pages >= 50) {
      splits = mdbres.total_pages / 50;
    }
    const pagesArray = [];
    for (let i = 1; i <= totalPages; i++) {
      pagesArray.push(i);
    }

    const options = {
      title: 'Search Movies',
      mdb: mdbres,
      page,
      previousUrl,
      nextUrl,
      totalPages,
      pagesArray,
      query,
    };

    res.render('movies/search', options);
  });
};
