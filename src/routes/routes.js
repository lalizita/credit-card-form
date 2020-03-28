import React from 'react'
import CreditCardForm from '../CreditCardForm';
import Test from '../Test';


export const routes = [
  {
    path: '/',
    component: React.lazy(() => import('../App')),
    exact:true,
    // @TODO make it works
    // routes: [
    //   {
    //     path: '/test',
    //     exact:true,
    //     component: React.lazy(() => import('../Test'))
    //   },
    //   {
    //     path: '/credit-card',
    //     component: React.lazy(() => import('../CreditCardForm'))
    //   }
    // ]
  },
  {
    path: '/test',
    // exact: true,
    component: React.lazy(() => import('../Test'))
  },
  {
    path: '/credit-card',
    // exact:true,
    component: React.lazy(() => import('../CreditCardForm'))
  }
]
