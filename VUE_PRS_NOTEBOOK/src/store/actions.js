import * as types from "./mutation.types";

export default {
  [types.addNote]({ commit }) {
    commit("addNote");
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
  }
};
