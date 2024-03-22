// dummyData.js
const dummyData = {
  loaders: [
    { id: 1, name: 'Loader 1', status: 'Enabled' },
    { id: 2, name: 'Loader 2', status: 'Disabled' },
    { id: 3, name: 'Loader 3', status: 'Enabled' }
  ],
  actions: [
    { id: 1, name: 'Action 1', type: 'SMS', condition: 'Condition 1' },
    { id: 2, name: 'Action 2', type: 'Email', condition: 'Condition 2' },
    { id: 3, name: 'Action 3', type: 'WhatsApp', condition: 'Condition 3' }
  ],
  metrics: [
    { id: 1, name: 'Metric 1', definition: 'Definition 1' },
    { id: 2, name: 'Metric 2', definition: 'Definition 2' },
    { id: 3, name: 'Metric 3', definition: 'Definition 3' }
  ]
};

export default dummyData;
