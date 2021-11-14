<template>
  <div detail-page>
    <div class="inner-holder">
      <h2>{{detailInfo.strDrink || 'Loading..'}}</h2>
      <div class="detail-main-info">
        <div class="main-thumb">
          <div v-if="!imgSrc" class="skeleton" />
          <img v-else :src="imgSrc" alt="drink-img" />
        </div>
        <div class="main-info">
          <h3>Name: {{ detailInfo.strDrink }}</h3>
          <ul class="info-list">
            <li v-for="(value,key) in mainInfo" :key="key">
              <p><h4>{{key}}</h4>: {{value}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="detail-sub-info">
        <div>
          <h4>Ingredients</h4>
          <p v-if="!ingredients.length">No Ingredients Data.</p>
          <template v-else>
            <span v-for="([i,m]) in ingredients" :key="i">{{`${i}: ${m}`}}</span>
          </template>
        </div>
        <div>
          <h4>IBA</h4>
          <p>{{detailInfo.strIBA || 'No IBA Data.'}}</p>
        </div>
        <div>
          <h4>Instruction</h4>
          <p>{{detailInfo.strInstructions || 'No Instruction Data.'}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDrinkDetail } from '@/api'

export default {
  name: 'DetailPage',
  middleware: 'superGreat',
  data() {
    return {
      detailInfo: {},
    }
  },
  head() {
    return {
      title: `${this.detailInfo.strDrink}의 상세정보!`,
      meta: [
        {hid: '칵태일', name: '칵테일 상세', content: '칵테일 상세정보를 보여줍니다.'},
      ],
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
    },
    ingredients() {
      let list = [];
      let i = 1;
      while (true) {
        if (!this.detailInfo?.[`strIngredient${i}`] || !this.detailInfo[`strMeasure${i}`]) break;
        list.push([this.detailInfo[`strIngredient${i}`], this.detailInfo[`strMeasure${i}`]])
        i++;
      }
      return list;
    },
  },
  async asyncData({ app, params }) {
    const { id } = params;
    const res = await getDrinkDetail(id);
    return { detailInfo: res.data.drinks[0] };
  },
  validate ({ app, params }) {
    return app.$isGreater(+params.id);
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
      padding: 10px 20px;
      color: #fff;
      background-color: #C3AC9D;
    }

    .detail-main-info {
      display: flex;
      justify-content: center;
      height: 240px;
      margin: 40px 0 0;

      .main-thumb {
        width: 300px;
        height: 100%;
        border-radius: 8px;
        overflow: hidden;

        .skeleton {
          width: 100%;
          height: 240px;
          background-color: rgba(0,0,0,0.1);
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .main-info {
        width: calc(100% - 300px);
        background: #E7D8C4;
        margin: 0 0 0 20px;
        padding: 20px;
        border-radius: 8px;

        .info-list {
          margin-top: 10px;

          li {
            opacity: 0.7;
            margin-bottom: 5px;

            h4 { 
              display: inline-block;
            }
          }
        }
      }
    }

    .detail-sub-info {
      margin: 40px 0 0;
      
      > div {
        min-height: 70px;
        background-color: #E7D8C4;
        padding: 15px;
        margin: 0 0 20px;
        border-radius: 8px;
        font-size: 14px;

        h4 {
          font-size: 16px;
          margin: 0 0 7px;
        }

        p {
          opacity: .7;
        }

        span {
          display: inline-block;
          background-color: #59766F;
          color: #fff;
          margin: 0 5px 0 0;
          padding: 2px 8px;
          border-radius: 15px;
        }
      }
    }
  }
}
</style>