import express from 'express';
import mysql from 'mysql2';

import { db } from './config/connect.js';

const PORT = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
	res.json('Hello this is the backend');
});

app.get('/books', (req, res) => {
	const q = 'SELECT * FROM pokemons';
	db.query(q, (err, data) => {
		if (err) return res.json(err.message);
		return res.json(data);
	});
});

app.post;

app.listen(PORT, () => {
	console.log(`Server started in port ${PORT}`);
});
