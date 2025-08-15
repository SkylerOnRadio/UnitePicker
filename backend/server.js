import express from 'express';
import mysql from 'mysql2';

const app = express();

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'r4+3cp[yi9e%t9012nefp',
	database: 'unite',
});

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

app.listen(3000, () => {
	console.log('Server started.');
});
