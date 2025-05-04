export const movieIndex = (req, res) => {
  // Logic to get all movies
  res.json({ message: 'Get all movies' });
}

export const createMovies = (req, res) => {
  res.json({ message: 'Create a movie' });
}

export const updateMovies = (req, res) => {
  res.json({ message: 'Update a movie' });
}

export const deleteMovies = (req, res) => {
  res.json({ message: 'Delete a movie' });
}
