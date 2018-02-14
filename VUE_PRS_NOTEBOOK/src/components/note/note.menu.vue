<template>
<Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
  <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
    <MenuItem>
    <router-link to="/" tag='li'>
      <Button type="dashed" long style="color:white;" icon="android-arrow-back">返回首页</Button>
    </router-link>
    </MenuItem>
    <MenuItem>
    <Button type="primary" long style="color:white;" icon="plus" @click="addNote()">新笔记本</Button>
    </MenuItem>
    <Submenu v-for="notebook in notebookList" :id="notebook.id">
      <template slot="title">
        <Icon type="ios-book"></Icon>
        {{notebook.name}}
      </template>
      <MenuItem v-for="note in notebook.noteList" :id="note.id">{{note.title}}</MenuItem>
    </Submenu>
  </Menu>
</Sider>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions
} from "Vuex";

export default {
  data() {
    return {
      notebookList: [{
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
      }]
    }
  },
  computed: {
    ...mapState({
      editorStatus: {
        isEditoring:
      },
      notes: state => state.notes
    })
  },
  methods: {
    ...mapActions({
      addNote: "addNote",
      editNoteTitle: "editNoteTitle",
      editNote: "editNote",
      deleteNote: "deleteNote"
    })
  },
  mounted: function () {
    this.$nextTick(function () {
      this.$data.list = this.notes;
    });
  }
}

</script>
