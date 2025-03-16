const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

let dreams = [];
let idCounter = 1;

// Create
app.post('/dreams', (req, res) => {
    const dream = {
        id: idCounter++,
        ...req.body
    };
    dreams.push(dream);
    res.status(201).json(dream);
});

// Read all
app.get('/dreams', (req, res) => {
    res.json(dreams);
});

// Read one
app.get('/dreams/:id', (req, res) => {
    const dream = dreams.find(d => d.id === parseInt(req.params.id));
    if (dream) {
        res.json(dream);
    } else {
        res.status(404).json({ message: 'Dream not found' });
    }
});

// Update
app.put('/dreams/:id', (req, res) => {
    const index = dreams.findIndex(d => d.id === parseInt(req.params.id));
    if (index !== -1) {
        dreams[index] = { ...dreams[index], ...req.body };
        res.json(dreams[index]);
    } else {
        res.status(404).json({ message: 'Dream not found' });
    }
});

// Delete
app.delete('/dreams/:id', (req, res) => {
    dreams = dreams.filter(d => d.id !== parseInt(req.params.id));
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});