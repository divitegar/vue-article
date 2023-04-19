<template>
  <div class="container">
    <img :src="image" :alt="title" />
    <div class="container-content">
      <AtomLink :link="href" :title="title" />
      <div class="description">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
import AtomLink from "@/components/atoms/AtomLink.vue";
export default {
  components: { AtomLink },
  name: "MoleculeCard",
  props: ["image", "title", "description", "href"],
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  box-sizing: border-box;
  padding: 10px;
  gap: 10px;
  align-items: center;
  img {
    transition: transform 1s; /* Animation */
    width: 100px;
    height: 100px;
    margin: 0;
    object-position: center;
    object-fit: cover;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
