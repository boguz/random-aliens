import express  from 'express';
import './apiRoutes';
import apiRouter from './apiRoutes';

const PORT = 8000;

const app = express();

app.use(express.static('alien_avatars'));
app.use(express.static('site'));

app.get('/', (req, res) => {
	console.log('SHOWING INDEX');
	res.sendFile(__dirname + 'site/index.html');
});

/**
 * Routes for the aliens
 */
app.use('/api/aliens', apiRouter);

app.listen(PORT, () => {
	console.log(`⚡️ Random Aliens server running on http://localhost:${PORT}`);
});
