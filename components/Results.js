const Results = ({ results }) => {
  const resultCard = results.forEach(() => {
    <li key={results.id}>
      <h2>{results.title}</h2>
      <p>{results.quote}</p>
    </li>;
  });

  return (
    <div className='results-container'>
      <ul>{resultCard}</ul>
    </div>
  );
};

export default Results;
