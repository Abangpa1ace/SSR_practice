<template>
  <div home-page>
    <h2 class="title">Cocktail</h2>
    <ul class="drink-list">
      <DrinkItem v-for="(drink,idx) in drinkList" :key="`drink-${idx}`" :drink="drink" />
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
  async mounted() {
<<<<<<< HEAD
    console.log(await getDrinkList());
=======
    const res = await getDrinkListByInitial('m');
    this.drinkList = res.data.drinks;
>>>>>>> 3e468f5dd0a04d742280d302e542bd950c2b7b7a
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