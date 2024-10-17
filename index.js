const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

const users = [
    {
        "id": 1,
        "name": "John Doe",
        "email": "johndoe@example.com",
        "address": "123 Main St, New York, NY"
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "email": "janesmith@example.com",
        "address": "456 Oak St, Los Angeles, CA"
    },
    {
        "id": 3,
        "name": "Michael Johnson",
        "email": "michaelj@example.com",
        "address": "789 Pine St, Chicago, IL"
    },
    {
        "id": 4,
        "name": "Emily Davis",
        "email": "emilyd@example.com",
        "address": "101 Maple Ave, Miami, FL"
    },
    {
        "id": 5,
        "name": "William Brown",
        "email": "willb@example.com",
        "address": "202 Cedar Ln, Dallas, TX"
    }
];

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Server is running");
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.post('/users', (req, res) => {
    console.log("POST API working", req.body);
    const newUser = req.body;
    newUser.id = Date.now(); 
    users.push(newUser);
    res.send(newUser);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
