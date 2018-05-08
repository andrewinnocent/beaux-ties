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
      const notifications = this.get('notifications')
      notifications.success('Go ahead and browse more Beaux-Ties!', 'Beaux-Tie Removed From Cart', {positionClass: 'toast-bottom-right'})
    },
    checkout () {
      const notifications = this.get('notifications')
      notifications.info('Checkout is not actually available.', 'It\'s a demo!', {positionClass: 'toast-bottom-right'})
    }
  }
})
