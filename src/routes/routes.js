import App from '../App';
import CreditCardForm from '../CreditCardForm'
import Test from '../Test'

export const routes = [
  {
    component: App,
    
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
    routes: [
      {
        path: '/test',
        exact: true,
        component:  Test,
      },
      {
        path: '/credit-card',
        exact:true,
        component: CreditCardForm,
      }
    ]
  },
  
]
