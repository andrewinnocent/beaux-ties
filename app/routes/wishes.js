import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  model () {
    return this.get('store').findAll('wish')
  },
  notifications: service('toast'),
  actions: {
    addToCart (bow) {
      const addNewBow = this.get('store').createRecord('bows-cart', {bow: bow})
      addNewBow.save()
      const notifications = this.get('notifications')
      notifications.success('Your Beaux-Tie\'s been added!', 'Added to Cart', {positionClass: 'toast-bottom-right'})
    }
  }
})
