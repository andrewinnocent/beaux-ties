import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  model () {
    return this.get('store').findAll('bows-cart')
  },
  notifications: service('toast'),
  actions: {
    removeFromCart (removeBow) {
      removeBow.destroyRecord()
    //     .then(() => {this.transitionTo('bows'))
    },
    checkout () {
      // console.log('checkout clicked')
      const notifications = this.get('notifications')
      notifications.info('Sorry for the incovenience! Checkout is not available, yet.', 'That\'s awkward...', {positionClass: 'toast-bottom-right'})
    }
  }
})
