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
    };

    this.addItem = this.addItem.bind(this);
    this.itemEdited = this.itemEdited.bind(this);
  }

  render() {
    const notes = this.state.notes;

    return (
      <div>
        <button onClick={this.addItem}>+</button>
        <Notes items={notes} onEdit={this.itemEdited} />
      </div>
    );
  }

  addItem() {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New task'
      }])
    });
  }

  itemEdited(noteId, task) {
    console.log('item edited', noteId, task);
  }
}