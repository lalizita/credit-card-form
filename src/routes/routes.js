import App from '../App'
import CreditCardForm from '../components/CreditCardForm/CreditCardForm'
import Test from '../components/Test/Test'

export const routes = [
  {
    component: App,
    routes: [
      {
        path: '/test',
        exact: true,
        component: Test
      },
      {
        path: '/credit-card',
        exact: true,
        component: CreditCardForm
      }
    ]
  }
]
