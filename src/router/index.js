import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BasicLayout from '@/components/BasicLayout'
import BasicContainer from '@/components/BasicContainer'
import FormRadio from '@/components/FormRadio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/BasicLayout',
      component: BasicLayout
    },
    {
      path: '/BasicContainer',
      component: BasicContainer
    },
    {
      path: '/FormRadio',
      component: FormRadio
    }
  ] //到时候配置路由要用到
})

//     mode: 'history',
//     routes: [
//         {
//             path: '/',
//             component: IndexPage
//         },
//         {
//             path: '/orderList',
//             component: OrderListPage
//         },
//         {
//             path: '/detail',
//             component: DetailPage,
//             redirect: '/detail/analysis',
//             children: [
//                 {
//                     path: 'analysis',
//                     component: DetailAnaPage
//                 },
//                 {
//                     path: 'count',
//                     component: DetailCouPage
//                 },
//                 {
//                     path: 'forecast',
//                     component: DetailForPage
//                 },
//                 {
//                     path: 'publish',
//                     component: DetailPubPage
//                 }
//             ]
//         }
//     ]
// })