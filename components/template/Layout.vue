<template>
  <div>
    <Navbar />
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/template/Navbar.vue";
export default {
  name: "Layout",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss"></style>
