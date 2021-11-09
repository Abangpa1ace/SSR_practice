<template>
  <div id="app">
    <Header />
    <Nuxt id="page" />
  </div>
</template>

<script>
import Header from '@/components/common/Header'

export default {
  components: {Header},
}
</script>

<style lang="scss">
#app {
  #page {
    margin: 60px 0;
  }
}
</style>