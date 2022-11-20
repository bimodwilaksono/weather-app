import axios from "axios";
import express from "express";
import path from "path";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const app = express();
// console.log(process.env.VITE_BASE_URL)

// app.use('/', express.static(path.join(__dirname, "public")))

app.get("/health", (req, res) => {
    res.json({ message: "Health is OK" });
});

app.get(`/current/:id`, async (req, res) => {
    const { id } = req.params;
    await axios
        .get(`${process.env.VITE_BASE_URL}/currentconditions/v1/${id}?apikey=${process.env.VITE_API_KEY}`)
        .then((resp) => res.json({ data: resp.data }))
        .catch((err) => res.json({ message: err.response.data.Message }));
});

app.get("/search", async (req, res) => {
    const { q } = req.query;
    await axios
        .get(`${process.env.VITE_BASE_URL}/locations/v1/cities/search?q=${q}&apikey=${process.env.VITE_API_KEY}`)
        .then((resp) => res.json({ data: resp.data }))
        .catch((err) => res.json({ message: err.response.data.Message }));
});

app.listen(5000, () => {
    console.log("App running on port 3000");
});
