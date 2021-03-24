import React from 'react';

const Nav = ({ setPage }) => {
  return (
    <div
      style={{
        display: 'flex',
        backgroundColor: 'yellow',
        padding: '1rem',
        justifyContent: 'center',
        boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.75)',
      }}>
      <button
        onClick={() => setPage('planets')}
        style={{
          marginRight: '15px',
          padding: '5px',
          boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.35)',
          cursor: 'pointer',
        }}>
        Planets
      </button>
      <button
        onClick={() => setPage('people')}
        style={{
          padding: '5px',
          boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.35)',
          cursor: 'pointer',
        }}>
        People
      </button>
    </div>
  );
};

export default Nav;
