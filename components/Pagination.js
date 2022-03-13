const Pagination = ({ quotesPerPage, totalQuotes, changePage }) => {
  const pageNumbers = [];

  //add total number of pages to array
  for (let i = 1; i <= Math.ceil(totalQuotes / quotesPerPage); i++) {
    pageNumbers.push(i);
  }

  //create page numbers and handle page change
  const numbersList = pageNumbers.map((number) => {
    return (
      <li key={number}>
        <a onClick={() => changePage(number)} href='#!'>
          {number}
        </a>
      </li>
    );
  });

  return (
    <nav className='pagination-nav'>
      <ul className='pagination'>{numbersList}</ul>
    </nav>
  );
};

export default Pagination;
