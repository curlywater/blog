<template>
  <span class="tag"><slot></slot></span>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.tag {
    display: inline-block;
    border-radius: 4px;
    padding: 0 4px;
    color: #666;
    background: #ffd400;
    transform: scale(0.8);
}
</style>

