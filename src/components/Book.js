/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { PropTypes } from 'prop-types';

function Book({ book }) {
  return (
    <>
      <ul>
        <li>
          {book.title}
          <span>{book.author}</span>
          <button type="submit">Delete</button>
          <span>{book.item_id}</span>
        </li>
      </ul>
    </>
  );
}

export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    item_id: PropTypes.number.isRequired,
  }).isRequired,
};
