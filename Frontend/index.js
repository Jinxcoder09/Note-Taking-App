const API_URL = "http://localhost:8080/notes"; // Your Spring Boot backend URL

// Fetch and display all notes
async function fetchNotes() {
    try {
        const response = await fetch("http://localhost:8080/notes");
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const notes = await response.json();
        console.log("Fetched notes:", notes); // Debugging step
        renderNotes(notes);
    } catch (error) {
        console.error("Error fetching notes:", error);
    }
}


// Add a new note
async function addNote() {
    const title = prompt("Enter note title:");
    if (!title) return;
    const content = prompt("Enter note content:");
    if (!content) return;

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content })
    });

    fetchNotes(); // Refresh notes
}

// Edit an existing note
async function editNote(id, oldTitle, oldContent) {
    const title = prompt("Edit title:", oldTitle);
    const content = prompt("Edit content:", oldContent);
    if (!title || !content) return;

    await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content })
    });

    fetchNotes();
}

// Delete a note
async function deleteNote(id) {
    if (confirm("Are you sure you want to delete this note?")) {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        fetchNotes();
    }
}

// Render notes dynamically in the frontend
function renderNotes(notes) {
    const notesContainer = document.getElementById("notesContainer");
    notesContainer.innerHTML = "";
    notes.forEach(note => {
        notesContainer.innerHTML += `
            <div class="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <h2 class="text-2xl font-semibold text-white">${note.title}</h2>
                <p class="text-gray-400 mt-2">${note.content}</p>
                <div class="flex justify-end mt-4">
                    <button onclick="editNote(${note.id}, '${note.title}', '${note.content}')" class="text-blue-400 hover:text-blue-500 mr-2">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button onclick="deleteNote(${note.id})" class="text-red-400 hover:text-red-500">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        `;
    });
}

// Add event listener to "Add Note" button
document.getElementById("addNoteBtn").addEventListener("click", addNote);

// Fetch notes when page loads
fetchNotes();