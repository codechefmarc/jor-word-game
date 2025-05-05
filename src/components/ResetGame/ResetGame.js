import React from 'react';

function ResetGame({ resetGame }) {
  return (
    <>
      <div>
        <button
          onClick={() => resetGame()}
          style={{
            border: '1px solid #ccc',
            padding: '0.5rem',
            borderRadius: '0.5rem',
            background: 'white',
            color: '#333',
            marginTop: '1rem',
          }}
        >
          Try another word!
        </button>
      </div>
    </>
  );
}

export default ResetGame;
