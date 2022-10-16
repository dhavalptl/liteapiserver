import { Router } from 'express';
import { getNotes, addNote, deleteNote, updateNote } from '../controllers/noteController.mjs';

const router = Router();

router.route('/').get(getNotes).post(addNote)
router.route('/:id').delete(deleteNote).put(updateNote)

export default router;