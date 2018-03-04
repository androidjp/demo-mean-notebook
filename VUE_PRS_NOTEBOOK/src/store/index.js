import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutation'

Vue.use(Vuex);

const state = {
  isAllList: true,
  notebookList:[{
  id: '1',
  name: '读书笔记',
  noteList: [{
      id: '1',
      title: '白话DL',
      content: '哈哈哈哈'
    },
    {
      id: '2',
      title: 'Android开发艺术探索',
      content: 'AAAA'
    },
    {
      id: '3',
      title: 'Java高级程序设计',
      content: 'AAAA'
    }
  ]
}],
  activeNote: null
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

// notebookList: [{
//   id: '1',
//   name: '读书笔记',
//   noteList: [{
//       id: '1',
//       title: '白话DL',
//       content: '哈哈哈哈'
//     },
//     {
//       id: '2',
//       title: 'Android开发艺术探索',
//       content: 'AAAA'
//     },
//     {
//       id: '3',
//       title: 'Java高级程序设计',
//       content: 'AAAA'
//     }
//   ]
// }]
