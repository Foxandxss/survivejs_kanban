import React from 'react';
import Notes from './Notes';
import uuid from 'node-uuid';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn webpack'
        },
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do Laundry'
        }
      ]
    }
  }

  render() {
    const notes = this.state.notes;

    return (
      <div>
        <Notes items={notes} />
      </div>
    );
  }
}