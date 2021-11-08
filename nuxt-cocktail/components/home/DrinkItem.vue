<template>
  <div drink-item>
    <img :src="imgsrc" alt="drink-img" class="item-img" />
    <p>{{ drink.strDrink }}</p>
  </div>
</template>

<script>
export default {
  name: 'DrinkItem',
  props: {
    drink: { type: Object, default: null },
  },
  computed: {
    imgsrc() {
      return this.drink.strDrinkThumb
    }
  },
}
</script>

<style lang="scss">
[drink-item] {
  border: 1px solid blue;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;

  .item-img {
    width: 100%;
  }
}
</style>