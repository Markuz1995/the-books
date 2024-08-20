import React, { useState } from 'react';
import API from '../api';

const BookForm = ({ book, onSave }) => {
  const [formData, setFormData] = useState({
    title: book ? book.title : '',
    author: book ? book.author : '',
    status: book ? book.status : 1,
    rating: book ? book.rating : 1,
    genre: book ? book.genre : '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (book) {
      await API.put(`/books/${book.id}`, formData);
    } else {
      await API.post('/books', formData);
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Book Title"
      />
      <input
        type="text"
        name="author"
        value={formData.author}
        onChange={handleChange}
        placeholder="Author"
      />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value={1}>To Read</option>
        <option value={2}>Reading</option>
        <option value={3}>Read</option>
      </select>
      <input
        type="number"
        name="rating"
        value={formData.rating}
        onChange={handleChange}
        placeholder="Rating"
        min={1}
        max={5}
      />
      <input
        type="text"
        name="genre"
        value={formData.genre}
        onChange={handleChange}
        placeholder="Genre"
      />
      <button type="submit">Save Book</button>
    </form>
  );
};

export default BookForm;
