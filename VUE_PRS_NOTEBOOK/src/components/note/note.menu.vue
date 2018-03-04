<template>
<Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
  <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
    <MenuItem name="menu-back">
      <router-link to="/" tag='li'>
        <Button type="dashed" long style="color:white;" icon="android-arrow-back">返回首页</Button>
      </router-link>
    </MenuItem>
    <MenuItem  name="menu-add-notebook">
      <Button type="primary" long style="color:white;" icon="plus" @click="onAddingNoteList">新笔记本</Button>
    </MenuItem>
    <Submenu v-for="notebook in notebookList" :id="notebook.id" :name="notebook.id">
      <template slot="title">
        <Icon type="ios-book"></Icon>
        {{notebook.name}}
      </template>
      <Button type="primary" style="color:white;margin:8px 25%;" icon="plus" @click="addNote({notebookId:notebook.id})">新笔记</Button>
      <MenuItem v-for="note in notebook.noteList" :name="note.id">
      <li @click="choiceNote({note:note})">
        {{note.title}}
      </li>
      </MenuItem>
    </Submenu>
  </Menu>
</Sider>
</template>

<script>
import { mapState, mapGetters, mapActions } from "Vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      notebookList: state => state.notebookList
    })
  },
  methods: {
    ...mapActions({
      addNote: "addNote",
      deleteNote: "deleteNote",
      addNotebook: "addNotebook",
      choiceNote: "choiceNote"
    }),
    test:function(){
      console.log('Hello');
    },
    onAddingNoteList: function() {
      self = this;
      this.$Modal.confirm({
        render: h => {
          return h("Input", {
            props: {
              autofocus: true,
              placeholder: "请输入新笔记本的名称..."
            },
            on: {
              input: val => {
                this.value = val;
              }
            }
          });
        },
        onOk: () => {
          self.addNotebook({ name: this.value });
        },
        onCancel: () => {
          self.$Message.info("你取消了");
        }
      });
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      this.$data.list = this.notes;
    });
  }
};
</script>
