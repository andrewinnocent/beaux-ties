import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
// import { computed } from '@ember/object'

export default Route.extend({
  model () {
    return this.get('store').findAll('wish')
  },
  // notActive: computed('model.@each.active', function () {
  //   if (model.active)
  // }),
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
