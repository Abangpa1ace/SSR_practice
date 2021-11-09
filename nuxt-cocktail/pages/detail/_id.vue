<template>
  <div detail-page>
    <div class="inner-holder">
      <h2>{{detailInfo.strDrink}}</h2>
      <div class="detail-thumb-info">
        <img :src="imgSrc" alt="drink-img" />
        <div class="main-info">
          <h3>{{ detailInfo.strDrink }}</h3>
        </div>
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
    mainInfo() {
      return {
        Category: this.detailInfo?.strCategory,
        Alcoholic: this.detailInfo?.strAlcoholic,
        Glass: this.detailInfo?.strGlass,
      }
    }
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

  .inner-holder {
    width: 1200px;
    margin: 0 auto;

    h2 {
      padding: 10px 30px;
      color: #fff;
      background-color: #C3AC9D;
    }

    .detail-thumb-info {
      display: flex;
      justify-content: center;
      margin: 30px 0 0;

      img {
        width: 300px;
        border-radius: 8px;
      }

      .main-info {
        width: 100%;
        background: #E7D8C4;
        margin: 0 0 0 20px;
        padding: 15px;
        border-radius: 8px;
      }
    }
  }
}
</style>