import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  model (params) {
    return this.get('store').findRecord('bow', params.bow_id)
  },
  notifications: service('toast'),
  actions: {
    addToCart (addBow) {
      const addNewBow = this.get('store').createRecord('bows-cart', { bow: addBow })
      addNewBow.save()
      const notifications = this.get('notifications')
      notifications.success('Your Beaux-Tie\'s been added!', 'Added to Cart', {positionClass: 'toast-bottom-right'})
    }
    // addToWish (bowToAdd) {
    //   console.log('bowToAdd is', bowToAdd)
    //   const newWish = this.get('store').createRecord('wish', {
    //     bow: bowToAdd,
    //     active: true
    //   })
    //   newWish.save()
    //   const notifications = this.get('notifications')
    //   notifications.success('Your Beaux-Tie\'s been added!', 'Added to Wishlist', {positionClass: 'toast-bottom-right'})
    // }
  }
})
