import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Survey() {
  const { questionNumber } = useParams();
  const int = parseInt(questionNumber, 10);

  const prev = int === 1 ? 1 : int - 1;
  const next = int + 1;
  return (
    <div>
      <h1>Survey 🧮</h1>
      <h2>
        Question
        {' '}
        {questionNumber}

        <Link to={`/survey/${prev}`}>Back</Link>
        {
            int === 10 ? (<Link to="/results">Results</Link>) : (<Link to={`/survey/${next}`}>Next</Link>)
        }
      </h2>
    </div>
  );
}

export default Survey;
