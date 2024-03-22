import React from 'react';
import dummyData from '../dummyData'; // Import dummy data

const ActionList = () => {
  const { actions } = dummyData; // Destructure actions from dummyData

  return (
    <div>
      <h2>Actions</h2>
      <ul>
        {actions.map(action => (
          <li key={action.id}>
            {action.name} - {action.type} - {action.condition}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActionList;
