// 个人笔记编辑主页
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.note-textarea {
  height: 100%;
  width: 100%;
  border: 0;
  border-radius: 0;
  background: transparent;
  padding: 16px;
  min-height: 720px;
}
.note-input {
  height: 40px;
  width: 100%;
  padding: 0 12px;
  line-height: 29px;
  border: 0;
  border-radius: 0;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 30px;
}
</style>
<template>
    <div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        Item 1
                    </template>
                    <MenuItem name="1-1">Option 1</MenuItem>
                    <MenuItem name="1-2">Option 2</MenuItem>
                    <MenuItem name="1-3">Option 3</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                        Item 2
                    </template>
                    <MenuItem name="2-1">Option 1</MenuItem>
                    <MenuItem name="2-2">Option 2</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        Item 3
                    </template>
                    <MenuItem name="3-1">Option 1</MenuItem>
                    <MenuItem name="3-2">Option 2</MenuItem>
                </Submenu>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px', height:'100%'}">
            <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
              <input type="text" class="note-input" v-model="title" @change="editNoteTitle({title:title})"></input>
            </Header>
            <Content :style="{height:'100%'}">

                    <textarea class="form-control note-textarea" v-model="content" @change="editNote({content:content})"></textarea>

            </Content>
        </Layout>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "Vuex";
export default {
  data() {
    return {
      notebookList: []
    };
  },
  computed: {
    ...mapState({
      activeNote: state => state.activeNote,
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
  mounted: function() {
    this.$nextTick(function() {
      this.$data.list = this.notes;
    });
  }
};
</script>
