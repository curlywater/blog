<template>
  <div></div>
</template>

<script>
import { resolveSidebarItems } from "@theme/util";

export default {
  computed: {
    categoryList() {
      const sidebarItems = resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );
      console.log(sidebarItems);
      return sidebarItems;
    }
  }
};
</script>

<style>
</style>