<template>
  <NuxtLink class="link" :to="link">
    {{ title }}
  </NuxtLink>
</template>

<script>
export default {
  name: "AtomLink",
  props: ["link", "title"],
};
</script>
