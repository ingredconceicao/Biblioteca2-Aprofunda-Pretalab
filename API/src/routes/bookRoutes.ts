import { Router } from 'express';
import {
  createPost,
  listPosts,
  updatePost,
  deletePost,
} from '../controllers/booksController';

const router = Router();

router.post('/', createPost);
router.get('/', listPosts);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;






