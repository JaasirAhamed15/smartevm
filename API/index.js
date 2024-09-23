// const express = require('express');
// const app = express();
// const PORT = 3000;

// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Welcome to the Express API!');
// });

// app.get('/user/:id', (req, res) => {
//     const userId = req.params.id;
//     res.json({
//         message: `User data for user id: ${userId}`,
//         userId: userId
//     });
// });

// app.post('/user', (req, res) => {
//     const { name, age } = req.body;

//     if (!name || !age) {
//         return res.status(400).json({ error: 'Name and age are required' });
//     }

//     res.json({
//         message: 'New user created',
//         user: { name, age }
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require('express');
const app = express();
const PORT = 3000;
