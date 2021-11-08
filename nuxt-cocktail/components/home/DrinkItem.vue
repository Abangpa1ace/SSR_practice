<template>
  <div drink-item>
    <img :src="imgsrc" alt="drink-img" class="item-img" />
    <div class="item-content">
      <p class="name">{{ drink.strDrink }}</p>
    </div>
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
    },
    descList() {
      return {
        category,
        alcoholic,
        glass,
      }
    }
  },
}
</script>

<style lang="scss">
[drink-item] {
  background-color: #F4ECE4;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;

  .item-img {
    width: 100%;
    height: auto;
  }

  .item-content {
    padding: 0px 20px;

    .name {
      color: #fff;
      background-color: #C2AC9E;
      text-align: center;
    }
  }
}
</style>