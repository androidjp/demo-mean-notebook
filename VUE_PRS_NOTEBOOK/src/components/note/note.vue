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

</style>
<template>
  <div class="layout">
    <note-menu></note-menu>
    <note-editor></note-editor>
  </div>
</template>
<script>
import noteMenu from './note.menu.vue';
import noteEditor from './note.editor.vue';
export default {
  data() {
    return {
    };
  },
   components : {noteMenu, noteEditor}
};
</script>
