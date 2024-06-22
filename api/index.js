const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

// For parsing application/json
app.use(express.json());

const users = [
    {
        id: 1,
        userName: "Ram",
        password: "Ram@123",
        isAdmin: true
    },
    {
        id: 2,
        userName: "Sonu",
        password: "Sonu@123",
        isAdmin: false
    }
];

app.post('/api/login', (req, res) => {
    try {
        const { userName, password } = req.body;

        if (!userName || !password) {
            return res.status(400).json('Bad Request: Missing userName or password');
        }

        const user = users.find(u => u.userName === userName && u.password === password);

        if (!user) {
            return res.status(401).json('Username or password is incorrect!');
        }

        // Here you can generate a JWT token and send it back if needed
        // const token = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, 'your_secret_key');
        // return res.status(200).json({ message: 'Login successful', token });

        res.status(200).json('Login successful');
    } catch (error) {
        console.error(error);
        if (!res.headersSent) {
            res.status(500).send('Internal Server Error');
        }
    }
});

app.listen(5000, () => {
    console.log("Backend server is running on port 5000");
});
