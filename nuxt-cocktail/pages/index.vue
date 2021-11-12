<template>
  <div home-page>
    <ViewedDrinkList />
    <ul class="drink-list">
      <DrinkItem v-for="(drink,idx) in drinkList" :key="`drink-${idx}`" 
        :drink="drink" @click="goToDetail(drink)" />
    </ul>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
import ViewedDrinkList from '@/components/home/ViewedDrinkList'
import DrinkItem from '@/components/home/DrinkItem'
import { getDrinkListByInitial } from '@/api'

export default {
  name: 'HomePage',
  components: {DrinkItem, ViewedDrinkList},
  data() {
    return {
      drinkList: [],
    }
  },
  methods: {
    ...mapMutations({
      setViewedList: 'drink/setViewedList',
    }),
    goToDetail(drink) {
      this.setViewedList(drink);
      this.$router.push(`/detail/${drink.idDrink}`)
    },
  },
  async fetch({ store }) {
    const res = await getDrinkListByInitial('a');
    console.log('taeng2', res.data);
    store.commit('drink/setTestList', res.data.drinks);
  },
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

  [viewed-drink-list] {
    position: fixed;
    right: 25px;
    top: 110px;
    z-index: 1000;
  }
}
</style>