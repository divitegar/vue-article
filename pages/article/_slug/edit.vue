<template>
  <Layout>
    <div v-for="item in detail" :key="item.link">
      <form @submit.prevent="handleSubmit" class="form-input">
        <input v-model="item.title" placeholder="title" />
        <input v-model="item.image" placeholder="url image" />
        <input :value="item.category" placeholder="category" />
        <AtomRichEditor :config="editorConfig" :value="item.headline" />
        <button type="submit">Send</button>
      </form>
    </div>
  </Layout>
</template>

<script>
import AtomRichEditor from "@/components/atoms/AtomRichEditor.vue";
import Layout from "@/components/template/Layout.vue";
import { mapState } from "vuex";
export default {
  name: "edit",
  components: {
    AtomRichEditor,
    Layout,
  },
  data() {
    return {
      form: {
        name: this.detail?.[0].title,
        email: "",
        message: "",
      },
    };
  },

  computed: {
    ...mapState("articles", ["detail"]),
  },
  mounted() {
    this.$store.dispatch("articles/detailArticles", this.$route.params.slug);
  },

  data() {
    return {
      editorInput: "",
      editorConfig: {
        width: "auto",
        plugins: [
          "Bold",
          "Link",
          "List",
          "FontSize",
          `MathType`,
          `Image`,
          `ImageUpload`,
          "SimpleUploadAdapter",
          `MediaEmbed`,
        ],
        simpleUpload: {
          // The URL that the images are uploaded to.
          uploadUrl: "https://yourwebsite.com/api/upload-image",
        },
      },
    };
  },
};
</script>

<style lang="scss">
.form-input {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 100vh;
  align-items: center;
  margin: auto;
  gap: 20px;

  input {
    width: 100%;
  }
}
</style>
