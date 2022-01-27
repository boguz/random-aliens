import express, { Request, Response } from 'express';
import { aliens } from './aliens';
import { AlienInterface } from './types.js';

const apiRouter = express.Router();

function getRandomAlien(): AlienInterface {
	return aliens[Math.floor(Math.random() * aliens.length)];
}

function getMultipleRandomAliens(amount: number): AlienInterface[] {
	const randomAliens: AlienInterface[] = [];
	while (randomAliens.length < amount) {
		const randomAlien = getRandomAlien();
		if (!randomAliens.some((alien) => alien.id === randomAlien.id)) {
			randomAliens.push(randomAlien);
		}
	}
	return randomAliens;
}

/**
 * Get all aliens
 */
apiRouter.get('/', (req: Request, res: Response) => {
	res.send(aliens);
});

/**
 * Get aliens by id
 */
apiRouter.get('/id/:id', (req: Request, res: Response) => {
	const ids = req.params.id.split(',');
	const result = aliens.filter((alien) => {
		return ids.includes(alien.id.toString());
	});
	res.send(result);
});

/**
 * Get random alien
 */
apiRouter.get('/random', (req: Request, res: Response) => {
	const alien: AlienInterface = getRandomAlien();
	res.send(alien);
});

/**
 * Get multiple random aliens
 *  - if incorrect amount: return 400
 *  - if amount loo big: return all aliens
 *  - otherwise return correct amount of random aliens
 */
apiRouter.get('/random/:amount', (req: Request, res: Response) => {
	const amount = +req.params.amount;
	
	if (!amount || typeof amount !== 'number') {
		return res.status(400).json({ status: 400, message: 'Incorrect amount'});
	} else if (amount > aliens.length) {
		return res.send(aliens);
	} else {
		const randomAliens = getMultipleRandomAliens(amount);
		res.send(randomAliens);
	}
});

export default apiRouter;
