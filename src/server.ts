import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import recipesRouter from './routes/recipesRoute';
import errorHandler from './middlewars/errorHandler';

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use('/api/recipes', recipesRouter);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});