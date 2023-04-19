<template>
  <Layout>
    <div v-for="item in detail" :key="item.link">
      <molecule-detail
        :title="item.title"
        :image="item.image"
        :category="item.category"
        :pusblised_at="item.pusblised_at"
        :headline="item.headline"
      />
    </div>
  </Layout>
</template>

<script>
import Layout from "@/components/template/Layout.vue";
import { mapState } from "vuex";
import MoleculeDetail from "@/components/molecules/MoleculeDetail.vue";

export default {
  name: "slug",
  computed: {
    ...mapState("articles", ["detail"]),
  },
  mounted() {
    this.$store.dispatch("articles/detailArticles", this.$route.params.slug);
  },
  components: { Layout, MoleculeDetail },
};
</script>
