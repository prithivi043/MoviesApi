import express from "express";
import moviesRouter from "./routes/routes.movies.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 6969

app.use('/movies', moviesRouter);
app.get("/", (req, res) => {
  res.json({ message: "Hello Wrld" });
}
);

app.listen(PORT, () => {
  console.log(`Server is running on http:localhost:${PORT}`);
}
)