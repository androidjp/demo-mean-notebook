import * as types from "./mutation.types";

export default {
  [types.addNote](state) {
    const newNote = {
      title: "New",
      author: "Me",
      content: "New note",
      _rm: Math.random()
    };
    state.notes.push(newNote);
    state.activeNote = newNote;
  },
  [types.editNote](state) {
    let rm = state.activeNote["_rm"];
    let index = state.notes.findIndex(function(v, i) {
      if (rm == v["_rm"]) return true;
      return false;
    });
    if (index >= 0) {
      state.notes.splice(index, 1);
    }
    state.activeNote = state.notes[0] || {};
  },
  [types.editNoteTitle](state, title) {
    state.activeNote.title = title;
  },
  [types.choiceNote](state) {
    state.activeNote = note;
  }
};
