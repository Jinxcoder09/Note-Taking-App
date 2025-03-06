package com.notetaking.notes.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.notetaking.notes.model.Note;
import com.notetaking.notes.repository.NoteRepository;

@Service
public class NoteService {
@Autowired
private NoteRepository noteRepository;
public Note saveNote(Note note){
    return noteRepository.save(note);
}
public List<Note> getAllNotes(){
    return noteRepository.findAll();
}
public Optional<Note>getNoteById(long id){
    return noteRepository.findById(id);
}
public Note updateNote(Long id, Note newNoteData) {
    return noteRepository.findById(id).map(note -> {
        note.setTitle(newNoteData.getTitle());
        note.setContent(newNoteData.getContent());
        return noteRepository.save(note);  // ✅ This is important!
    }).orElseThrow(() -> new RuntimeException("Note not found with ID: " + id));
}
public void deleteNoteById(Long id){
    noteRepository.deleteById(id);

}
}
