<template>
  <div id="note_menu" class="panel_style">
    <h2>{{menuTitle}}</h2>
    <button>保存</button>
    <button>删除</button>
    <button>编辑</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menuTitle: "这里 note 的菜单"
      }
    }
  }
</script>

<style>
  .panel_style {
    border: 4px dashed coral;
    margin: 6px;
    box-shadow: 0px 0px 5px #888888;
  }

  button {
    background:rgb(238, 131, 131);
    font-size: 20px;
  }
</style>

