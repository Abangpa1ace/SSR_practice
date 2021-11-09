<template>
  <div home-page>
    <ul class="drink-list">
      <DrinkItem v-for="(drink,idx) in drinkList" :key="`drink-${idx}`" 
        :drink="drink"/>
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
  // async mounted() {
  //   const res = await getDrinkListByInitial('c');
  //   this.drinkList = res.data.drinks;
  // },
  async asyncData() {
    const res = await getDrinkListByInitial('c');
    return { drinkList: res.data.drinks }
  },
}
</script>

<style lang="scss">
[home-page] {
  ul.drink-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px 15px;
    width: 800px;
    margin: 0 auto;
  }
}
</style>