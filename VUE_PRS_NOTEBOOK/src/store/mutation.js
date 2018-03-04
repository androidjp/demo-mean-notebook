import * as types from "./mutation.types";
import uuid from 'uuid/v1';
import Vue from 'vue';
export default {
  [types.addNotebook](state, name) {
    const newNoteList = {
      id:uuid(),
      name:name,
      noteList:[]
    };
    console.log("Add a new notebook named :", name);
    console.log(JSON.stringify(newNoteList));
    state.notebookList.unshift(newNoteList);
  },
  [types.addNote](state, notebookId) {
    const newNote = {
      id:uuid(),
      title: "New",
      author: "Me",
      content: "New note",
      _rm: Math.random()
    };
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    console.log('notebookId = ', notebookId)
    for(var i in state.notebookList){
      if(state.notebookList[i]['id'] == notebookId){
        state.notebookList[i].noteList.unshift(newNote);
        console.log(JSON.stringify(state.notebookList[i]))
        break;
      }
    }
    state.activeNote = newNote;
  },
  [types.editNote](state) {
    Vue.http.get('/someUrl')
  },
  [types.editNoteTitle](state, title) {
  },
  [types.choiceNote](state, note) {
    state.activeNote = note;
  }
};
