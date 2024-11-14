import React from 'react';

const PageSelector = ({ currentPage, totalPages, onPageChange }) => {
  // Functions to change the page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const goToFirstPage = () => {
    onPageChange(1);
  };

  const goToLastPage = () => {
    onPageChange(totalPages);
  };

  return (
    <div className="pagination-controls">
      <button onClick={goToFirstPage} disabled={currentPage === 1}>
        First
      </button>
      <button onClick={goToPreviousPage} disabled={currentPage === 1}>
        Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={goToNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
      <button onClick={goToLastPage} disabled={currentPage === totalPages}>
        Last
      </button>
    </div>
  );
};

export default PageSelector;
