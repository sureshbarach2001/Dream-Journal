document.addEventListener('DOMContentLoaded', () => {
    const dreamForm = document.getElementById('dreamForm');
    const dreamList = document.getElementById('dreamList');
    let editingId = null;

    // Fetch and display all dreams
    function loadDreams() {
        fetch('http://localhost:3000/dreams')
            .then(response => response.json())
            .then(dreams => {
                dreamList.innerHTML = '';
                dreams.forEach(dream => {
                    const dreamCard = createDreamCard(dream);
                    dreamList.appendChild(dreamCard);
                });
            });
    }

    // Create dream card element
    function createDreamCard(dream) {
        const div = document.createElement('div');
        div.className = 'dream-card';
        div.innerHTML = `
            <div class="mood-indicator" data-mood="${dream.mood}">${dream.mood}</div>
            <h3>${dream.title}</h3>
            <p class="description">${dream.description}</p>
            <p class="dream-date">📅 ${dream.date}</p>
            <div class="actions">
                <button onclick="editDream('${dream.id}')">Edit</button>
                <button onclick="deleteDream('${dream.id}')">Delete</button>
            </div>
        `;
        return div;
    }

    // Handle form submission
    dreamForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const dreamData = {
            title: document.getElementById('title').value,
            description: document.getElementById('description').value,
            date: document.getElementById('date').value,
            mood: document.getElementById('mood').value
        };

        const method = editingId ? 'PUT' : 'POST';
        const url = editingId ? 
            `http://localhost:3000/dreams/${editingId}` : 
            'http://localhost:3000/dreams';

        fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dreamData)
        })
        .then(() => {
            dreamForm.reset();
            editingId = null;
            loadDreams();
        });
    });

    // Edit dream
    window.editDream = function(id) {
        fetch(`http://localhost:3000/dreams/${id}`)
            .then(response => response.json())
            .then(dream => {
                document.getElementById('title').value = dream.title;
                document.getElementById('description').value = dream.description;
                document.getElementById('date').value = dream.date;
                document.getElementById('mood').value = dream.mood;
                editingId = id;
            });
    }

    // Delete dream
    window.deleteDream = function(id) {
        fetch(`http://localhost:3000/dreams/${id}`, {
            method: 'DELETE'
        }).then(() => loadDreams());
    }

    // Initial load
    loadDreams();
});