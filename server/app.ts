import express from 'express';
import cors from 'cors';
import path from 'node:path';
import { route as heroRoute } from './src/routes/hero.route';
import { route as imgRoute } from './src/routes/img.route';

const app = express();
const PORT = 3003;

app.use(cors());

app.use("/uploads", express.static(path.join(process.cwd(), "public", "uploads")));

app.use('/api/image', imgRoute);

app.use('/api/superheroes', express.json(), heroRoute);


app.listen(PORT, () => {
  console.log(`Server work at port: ${PORT}\nhttp://localhost:${PORT}`)
})