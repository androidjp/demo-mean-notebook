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
      <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}" v-if="activeNote!=null">
        <input type="text" class="note-input" placeholder="输入标题" v-model="activeNote.title" @change="editNoteTitle({title:title})"></input>
      </Header>
      <Content>
        <textarea v-if="activeNote != null" class="form-control note-textarea" v-model="activeNote.content" @change="editNote({content:content})" placeholder="输入笔记内容"></textarea>
        <div v-if="!activeNote" :style="{position:'relative',margin:'25% 48%', width:'500px'}">
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
    };
  },
  computed: {
    ...mapState({
      activeNote: state => state.activeNote
    })
  },
  methods: {
    ...mapActions({
      editNoteTitle: "editNoteTitle",
      editNote: "editNote"
    })
  },
  mounted: function () {
    this.$nextTick(function () {
      this.$data.list = this.notes;
    });
  }
};

</script>


