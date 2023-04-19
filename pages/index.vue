<template>
  <Layout>
    <div v-for="item in articles.posts" :key="item.link">
      <MoleculeCard
        :title="item.title"
        :image="item.image"
        :href="'/article/' + item.title"
        :description="item.headline"
      />
    </div>
  </Layout>
</template>

<script>
import AtomButton from "@/components/atoms/AtomButton.vue";
import MoleculeCard from "@/components/molecules/MoleculeCard.vue";
import Layout from "@/components/template/Layout.vue";
import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    AtomButton,
    Layout,
    MoleculeCard,
  },

  computed: {
    ...mapState("articles", ["articles"]),
  },

  mounted() {
    this.$store.dispatch("articles/storeArticles", "indonesia/jakarta");
  },
};
</script>
