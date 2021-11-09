<template>
  <div header>
    <div>
      <h2>Nuxt Cocktail</h2>
    </div>
    <div>
      <p class="gnb">GNB</p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
[header] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 5px 80px;
  background: #9D785B;

  p.gnb {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #4163D4;
    color: #fff;
    font-weight: bold;
    text-align: center;
    line-height: 43px;
  }
}
</style>