import Vue from 'vue';

export default ({ app }, inject) => {
  inject('$isGreater', (id: number): boolean => {
    return id > 15000;
  })
}