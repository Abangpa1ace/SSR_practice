<template>
  <nuxt-link drink-item :to="`/detail/${drink.idDrink}`">
    <img :src="imgsrc" alt="drink-img" class="item-img" />
    <p class="item-name">{{ drink.strDrink }}</p>
    <ul class="item-content">
      <li v-for="(value,key) in descList" :key="key">
        <p>
          <h4>{{key}}</h4>{{value}}
        </p>
      </li>
    </ul>
  </nuxt-link>
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
        Category: this.drink.strCategory,
        Alcoholic: this.drink.strAlcoholic,
        Glass: this.drink.strGlass,
      }
    }
  },
}
</script>

<style lang="scss">
[drink-item] {
  background-color: #E7D8C4;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  transition: transform .3s ease;

  &:hover {
    transform: translate(-1px,-1px);
    box-shadow: 1px 1px 3px 1px #c4c4c4;
  }

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

  .item-name {
    margin: 10px 0 0;
    padding: 5px 0;
    background-color: #C3AC9D;
    color: #fff;
    font-weight: bold;
    text-align: center;
  }

  .item-content {
    padding: 15px 10px;
    font-size: 15px;

    li {
      margin: 3px 0 0;

      h4 { 
        display: inline-block;
        margin: 0 5px 0 0;
      }
    }
  }
}
</style>