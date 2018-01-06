<template>
  <div id="note">
    <note_menu></note_menu>
    <note_editor></note_editor>
  </div>
</template>

<script>
import note_menu from './note.menu';
import note_editor from './note.editor'
export default {
  components: {note_menu, note_editor}
}
</script>

<style>

#note {
  border: 2px solid rgb(126, 158, 218);
  margin: 12px;
  padding: 6px;
}

</style>
