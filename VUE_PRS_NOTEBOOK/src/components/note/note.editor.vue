<style>

.note-textarea {
  height: cal(100%);
  width: 100%;
  border: 0;
  border-radius: 0;
  background: transparent;
  padding: 16px;
  min-height: 720px;
  outline: none;
  resize: none;
  bottom:0;
}

.note-input {
  width: 100%;
  border: 0;
  border-radius: 0;
  box-sizing: border-box;
  font-size: 30px;
  outline: none;
}
</style>

<template>
  <Layout :style="{marginLeft: '200px', height:'100%'}">
      <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}" v-show="config.isEditingANote">
        <input type="text" class="note-input" placeholder="输入标题" v-model="title" @change="editNoteTitle({title:title})"></input>
      </Header>
      <Content
        <textarea v-show="config.isEditingANote" class="form-control note-textarea" v-model="content" @change="editNote({content:content})" placeholder="输入笔记内容"></textarea>
        <div v-show="!config.isEditingANote" :style="{position:'relative',margin:'25% 48%', width:'500px'}">
          <Icon type="ionic" size="60" style='margin-left:6%'></Icon>
          <p>请选择笔记进行编辑</p>
        </div>
      </Content>
    </Layout>
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
      config: {
        isEditingANote: false
      }
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
  mounted: function () {
    this.$nextTick(function () {
      this.$data.list = this.notes;
    });
  }
};

</script>


