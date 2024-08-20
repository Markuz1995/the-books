const express = require('express');
const { check } = require('express-validator');
const bookController = require('../controllers/bookController');

const router = express.Router();

router.post('/books', [
  check('title').not().isEmpty(),
  check('author').not().isEmpty(),
  check('status').isInt({ min: 1, max: 3 }),
  check('genre').not().isEmpty(),
], bookController.createBook);

router.get('/books', bookController.getBooks);
router.get('/books/:id', bookController.getBookById);
router.put('/books/:id', [
  check('title').not().isEmpty(),
  check('author').not().isEmpty(),
  check('status').isInt({ min: 1, max: 3 }),
  check('genre').not().isEmpty(),
], bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);

module.exports = router;
