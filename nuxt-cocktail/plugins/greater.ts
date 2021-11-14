import Vue from 'vue';
import { Plugin } from '@nuxt/types';

const greaterPlugins: Plugin =  (context, inject: any) => {
  inject('isGreater', (id: number): boolean => {
    return id > 12000;
  })
}

export default greaterPlugins;