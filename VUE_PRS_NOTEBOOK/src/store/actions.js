import * as types from "./mutation.types";

export default {
  [types.addNote]({ commit }, {notebookId}) {
    commit("addNote", notebookId);
  },
  [types.editNote]({ commit }, { content }) {
    commit("editNote", content);
  },
  [types.editNoteTitle]({ commit }, { title }) {
    commit("editNoteTitle", title);
  },
  [types.deleteNote]({ commit }) {
    commit("deleteNote");
  },
  [types.choiceNote]({ commit }, { note }) {
    commit("choiceNote", note);
  },
  [types.addNotebook]({ commit }, { name }) {
    commit("addNotebook", name);
  }
};
