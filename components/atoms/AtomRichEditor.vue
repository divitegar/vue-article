<template>
    <ckeditor
      :editor="editor"
      :value="value"
      :config="config"
      @input="event => $emit('input', event)"
    />
  </template>
  <script>
      let FullFreeBuildEditor;
      let CKEditor;
      if (process.client) {
          FullFreeBuildEditor = require('@blowstack/ckeditor5-full-free-build');
          CKEditor = require('@ckeditor/ckeditor5-vue')
      }else {
      CKEditor = { component : {template:'<div></div>'}}
    }
  
      export default {
          name: 'ck-editor',
          components: {
              ckeditor: CKEditor.component
          },
          props: ['value','config'],
          data() {
              return {
                  editor: FullFreeBuildEditor,
              }
          },
      };
  </script>
  