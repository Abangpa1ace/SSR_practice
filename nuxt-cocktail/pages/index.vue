<template>
  <div home-page>
    <DrinkItem v-for="drink in drinkList" :key="drink" />
  </div>
</template>

<script>
import DrinkItem from '@/components/home/DrinkItem'
import { getDrinkList } from '@/api'


export default {
  name: 'HomePage',
  components: {DrinkItem},
  data() {
    return {
      drinkList: [1,2,3],
    }
  },
  async mounted() {
    console.log(await getDrinkList());
  },
}
</script>

<style lang="sass" scoped>

</style>