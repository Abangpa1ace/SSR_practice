<template>
  <div home-page>
    <h2 class="title">Cocktail</h2>
    <ul class="drink-list">
      <DrinkItem v-for="(drink,idx) in drinkList" :key="`drink-${idx}`" 
        :drink="drink" @click="goToDrinkDetail(drink.idDrink)" />
    </ul>
  </div>
</template>

<script>
import DrinkItem from '@/components/home/DrinkItem'
import { getDrinkListByInitial } from '@/api'

export default {
  name: 'HomePage',
  components: {DrinkItem},
  data() {
    return {
      drinkList: [],
    }
  },
  methods: {
    goToDrinkDetail(id) {
      this.$router.push(`/detail/${id}`)
    }
  },
  async mounted() {
    const res = await getDrinkListByInitial('m');
    this.drinkList = res.data.drinks;
  },
}
</script>

<style lang="scss">
[home-page] {
  ul.drink-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    width: 800px;
    margin: 50px auto;
  }
}
</style>