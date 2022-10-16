import Note from "../models/note.mjs";
import { asyncHandler } from "../utils/asyncHandler.mjs";

export const getNotes = asyncHandler(async (req, res) => {
    const notes = await Note.find()
    res.status(200).json(notes);
});
  

export const addNote = asyncHandler(async (req, res) => {
    if (!req.body.title || !req.body.details) {
      res.status(400);
      throw new Error('Please add correct note');
    }
  
    const note = await Note.create({
      title: req.body.title,
      details: eq.body.details,
    });
  
    res.status(200).json(note);
});
  

export const updateNote = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id)
  
    if (!note) {
      res.status(400)
      throw new Error('Note not found')
    }

    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
  
    res.status(200).json(updatedNote)
});
  
export const deleteNote = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id)
  
    if (!note) {
      res.status(400)
      throw new Error('Note not found')
    }

    await note.remove()
  
    res.status(200).json({ id: req.params.id })
});
  