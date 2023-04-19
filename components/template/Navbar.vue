<template>
  <nav>
    <div class="container">
      <div>
        <AtomLink link="/" title="Home" />
      </div>
    </div>
  </nav>
</template>

<script>
import AtomLink from "@/components/atoms/AtomLink.vue";

export default {
  name: "Navbar",
  components: { AtomLink },
};
</script>

<style lang="scss" scoped>
nav {
  .container {
    background: #fff;
    border-bottom: 1px solid rgb(78, 76, 76);
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    box-shadow: 1px 15px 19px -13px rgba(0, 0, 0, 0.79);
    -webkit-box-shadow: 1px 15px 19px -13px rgba(0, 0, 0, 0.79);
    -moz-box-shadow: 1px 15px 19px -13px rgba(0, 0, 0, 0.79);
  }
}
</style>
