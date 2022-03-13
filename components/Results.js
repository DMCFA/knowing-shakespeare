import React from 'react';
import NoResults from './NoResults';

//create list elements
const Results = ({ results }) => {
  const resultCard = results.map((result) => {
    return (
      <li key={result._id}>
        <h3>{result._source.play_name}</h3>
        <p>
          <q>{result._source.text_entry}</q>
        </p>
      </li>
    );
  });

  return (
    <div className='results-container'>
      {results.length > 0 ? <ul>{resultCard}</ul> : <NoResults />}
    </div>
  );
};

export default Results;
