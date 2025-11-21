const axios = require("axios");
const API_KEY = process.env.OMDB_API_KEY;
const BASE_URL = "http://www.omdbapi.com/";

async function getSearchedMovies(req, res) {
  try {
    const title = req.query.title?.trim();

    if (!title) {
      return res
        .status(400)
        .json({ error: "Title query parameter is required" });
    }

    // 't' is for exact title match
    // Use 's' instead of 't' if you want search (multiple results)
    const response = await axios.get(
      `${BASE_URL}?s=${title}&apikey=${API_KEY}`
    );

    const data = response.data;
    //console.log("This is data:", data);

    // Response with RRRRRRRRRR NOT response
    if (data.Response === "False") {
      return res.status(404).json({ error: data.Error || "Movie not found" });
    }
    res.json(data); // Actually send the real movie data
  } catch (error) {
    console.error("Error searching movie by title: ", error.message);
    res.status(500).json({ error: "Failed to fetch movie data" });
  }
  //res.send(`Sending searched movies...${title}`);
}

async function getMoviesById(req, res) {
  const { id } = req.params;

  try {
    const response = await axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);

    res.json(response.data);
    // res.send(`Data for movies: ${req.params.id}`);
  } catch (error) {
    if (error.response) {
      console.log(
        "API Error:",
        error.response.status,
        error.response.data,
        error.message
      );
      res
        .status(error.response.status)
        .json({ message: "Error fetching movie from external API." });
    } else {
      console.error("Network Error:", error.message);
      res.status(500).json({ message: "A network error occurred." });
    }
  }

  //res.send(`Data for movies: ${req.params.id}`);
  //console.log('KIBREAB', data);
}

module.exports = { getSearchedMovies, getMoviesById };
