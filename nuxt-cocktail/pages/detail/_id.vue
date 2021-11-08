<template>
  <div detail-page>
    <h2>{{detailInfo.strDrink}}</h2>
      <div>
        <img :src="imgSrc" alt="drink-img" />
      </div>
    </div>
  </div>
</template>

<script>
import { getDrinkDetail } from '@/api'

export default {
  name: 'DetailPage',
  data() {
    return {
      detailInfo: {},
    }
  },
  computed: {
    imgSrc() {
      return this.detailInfo.strDrinkThumb;
    },
  },
  async mounted() {
    const idDrink = this.$route.params?.id;
    const res = await getDrinkDetail(idDrink);
    this.detailInfo = res.data.drinks[0];
  }
}
</script>

<style lang="scss">
[detail-page] {
  padding: 40px 0;

  h2 {
    padding: 10px 30px;
    color: #fff;
    background-color: #C3AC9D;
  }

}
</style>