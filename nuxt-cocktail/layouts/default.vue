<template>
  <div id="app">
    <Header />
    <Nuxt id="page" />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

export default {
  components: {Header, Footer},
}
</script>

<style lang="scss">
#app {
  #page {
    padding: 60px 0;
  }
}
</style>