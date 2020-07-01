import Vue from 'vue'
import Router from 'vue-router'
import DrugShow from '@/components/drug/show'
import  DrugAdd from '@/components/drug/add'
import DrugUpdate from  '@/components/drug/update'
import SortShow from '@/components/sorts/show'
import  SortAdd from '@/components/sorts/add'
import SortUpdate from  '@/components/sorts/update'
import  Drugs from '@/components/drugs'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Drugs',
      component:  Drugs,
      children:[
        {
          path: '/drug/show',
          name: 'DrugShow',
          component:  DrugShow

        },

        {
          path: '/drug/add',
          name: 'DrugAdd',
          component:  DrugAdd
        },
        {
          path: '/drug/update',
          name: 'DrugUpdate',
          component:  DrugUpdate

        },
        {
          path: '/sorts/show',
          name: 'SortShow',
          component:  SortShow

        },
        {
          path: '/sorts/add',
          name: 'SortAdd',
          component:  SortAdd
        },
        {
          path: '/sorts/update',
          name: 'SortUpdate',
          component:  SortUpdate

        },

      ]
    },



  ]
})
