import React from 'react';
import Notes from './Notes';
import uuid from 'node-uuid';
import findIndex from 'find-index';

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
    let notes = this.state.notes;
    const noteIndex = findIndex(notes, (o) => o.id === noteId);

    if (noteIndex < 0) {
      return console.warn('Failed to find the note', notes, noteId);
    }

    notes[noteIndex].task = task;

    this.setState({notes});
  }
}