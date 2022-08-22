import React from 'react';

const Pagination = ({ paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(40/5); i++) {
    pageNumbers.push(i);
  }


  return (
    
    <nav>
      <div className='pagination'>
        {pageNumbers.map(number => (
          <div key={number} className='active'>
            <a onClick={() => paginate(number)} href={`${number}`} >
              {number}
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;
