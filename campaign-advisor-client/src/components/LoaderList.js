// LoaderList.js
import React from 'react';
import dummyData from '../dummyData'; // Import dummy data

const LoaderList = () => {
  const { loaders } = dummyData;

  return (
    <div className="loader-list">
      <h2>Loaders</h2>
      <ul>
        {loaders.map(loader => (
          <li key={loader.id}>
            {loader.name} - {loader.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LoaderList;
