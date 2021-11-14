<template>
  <div viewed-drink-list v-if="viewedList.length">
    <nuxt-link
      v-for="(drink, idx) in viewedList"
      :key="idx"
      :to="`/detail/${drink.idDrink}`"
      class="viewed-item"
    >
      <img :src="drink.strDrinkThumb" alt="viewed-drink-img" />
      <p>{{ drink.strDrink }}</p>
    </nuxt-link>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ViewedDrinkList",
  computed: {
    viewedList() {
      return this.$store.state.drink.viewedList;
    },
  },
  methods: {
    ...mapMutations({
      getViewedList: "drink/getViewedList",
    }),
  },
  mounted() {
    this.getViewedList();
  },
};
</script>

<style lang="scss">
[viewed-drink-list] {
  width: 120px;
  height: 450px;
  padding: 10px;
  background: #788a85;
  border-radius: 4px;
  overflow-y: auto;

  .viewed-item {
    width: 100%;
    margin: 0 0 15px;

    img {
      width: 100%;
    }

    p {
      color: #fff;
      font-size: 13px;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
