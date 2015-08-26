import React from 'react';
import AltContainer from 'alt/AltContainer';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';
import LaneActions from '../actions/LaneActions';

export default class Lane extends React.Component {
  render() {
    const {id, name, notes, ...props} = this.props;

    return (
      <div {...props}>
        <div className='lane-header'>
          <div className='lane-name'>{name}</div>
          <div className='lane-add-note'>
            <button onClick={this.addNote.bind(null, id)}>+</button>
          </div>
        </div>
        <AltContainer
          stores={[NoteStore]}
          inject={{
            items: () => NoteStore.get(notes)
          }}>
          <Notes
            onEdit={this.editNote}
            onDelete={this.deleteNote.bind(null, id)} />
        </AltContainer>
      </div>
    );
  }
  addNote(laneId) {
    NoteActions.create({task: 'New Task'});
    LaneActions.attachToLane({laneId});
  }
  editNote(noteId, task) {
    NoteActions.update({id: noteId, task});
  }
  deleteNote(laneId, noteId) {
    NoteActions.delete(noteId);
    LaneActions.detachFromLane({laneId, noteId});
  }
}