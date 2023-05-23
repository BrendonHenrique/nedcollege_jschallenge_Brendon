import express from 'express'
import * as postController from '@/app/controllers/postController'

const router = express.Router()

router.get('/', postController.getAllPosts)
router.get('/:id', postController.getPostById)
router.delete('/:id', postController.deletePostById)
router.post('/', postController.createPost)
router.put('/:id', postController.updatePost)

export default router
