<template>
  <button

    :class="{ 'btn-outline': type == 'outline', 'btn-solid': type == 'solid' }"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "AtomButton",
  props: ["type", "text"],
};
</script>

<style lang="scss" scoped>
.btn-outline {
  background-color: #fff;
  color: #ed2b2a;
  border: 1px solid #ed2b2a;
  border-radius: 5px;
  padding: 5px 12px;
  cursor: pointer;
}

.btn-solid {
  background-color: #ed2b2a;
  color: #fff;
  border: 1px solid #ed2b2a;
  border-radius: 5px;
  padding: 5px 12px;
  cursor: pointer;
}
</style>
