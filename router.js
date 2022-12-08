import { Router } from 'express';
import axios from "axios";

const router = Router();

router.get('/hello', async (_req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

router.get("/health", (req, res) => {
  res.json({ message: "Health is OK" });
});

router.get(`/current/:id`, async (req, res) => {
  const { id } = req.params;
  await axios
      .get(`${process.env.VITE_BASE_URL}/currentconditions/v1/${id}?apikey=${process.env.VITE_API_KEY}`)
      .then((resp) => res.json({ data: resp.data }))
      .catch((err) => res.json({ message: err.response.data.Message }));
});

router.get("/search", async (req, res) => {
  const { q } = req.query;
  await axios
      .get(`${process.env.VITE_BASE_URL}/locations/v1/cities/search?q=${q}&apikey=${process.env.VITE_API_KEY}`)
      .then((resp) => res.json({ data: resp.data }))
      .catch((err) => res.json({ message: err.response.data.Message }));
});

router.get('/forecast/:id', async (req, res) => {
const { id } =req.params;
await axios
      .get(`${process.env.VITE_BASE_URL}/forecasts/v1/daily/5day/${id}?metric=true&apikey=${process.env.VITE_API_KEY}`)
      .then((resp) => res.json({ data: resp.data }))
      .catch((err) => res.json({message: err.response.data.Message}));
})

export default router;
