<template>
  <div class="container">
    <img :src="image" :alt="title" />
    <h1>{{ title }}</h1>
    <div class="wrapper-category">
      <h2>{{ category }}</h2>
      <div>{{ pusblised_at }}</div>
    </div>
    <p>{{ headline }}</p>
    <div class="wrapper-category">
      <nuxt-link to="/">
        <atom-button type="outline" text="back" />
      </nuxt-link>
      <nuxt-link :to="'/article/' + title + '/edit'">
        <atom-button type="solid" text="edit" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import AtomButton from "@/components/atoms/AtomButton.vue";
export default {
  components: { AtomButton },
  name: "MoleculeDetail",
  props: ["image", "title", "category", "pusblised_at", "headline"],
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0rem 20rem;
  text-align: center;
  img {
    width: 400px;
    height: 400px;
    object-fit: contain;
    margin: auto;
  }
  h1 {
    font-size: 30px;
    margin: 10px;
  }
  .wrapper-category {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 20px;
      font-weight: 600;
    }

    div {
      font-size: 14px;
    }
  }

  p {
    font-size: 24px;
  }
}
</style>
