<template>
  <p>{{ desc }}</p>
</template>

<script>
export default {
  name: "AtomDescription",
  props: ["desc"],
};
</script>

<style lang="scss">
p {
  font-size: 10px;
  color: rgb(25, 24, 24);
}
</style>
