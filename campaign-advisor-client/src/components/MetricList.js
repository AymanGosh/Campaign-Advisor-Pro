import React from 'react';
import dummyData from '../dummyData'; // Import dummy data

const MetricList = () => {
  const { metrics } = dummyData; // Destructure metrics from dummyData

  return (
    <div>
      <h2>Metrics</h2>
      <ul>
        {metrics.map(metric => (
          <li key={metric.id}>
            {metric.name} - {metric.definition}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MetricList;
