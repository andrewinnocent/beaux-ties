import Route from '@ember/routing/route'
import RSVP from 'rsvp'
import { inject as service } from '@ember/service'

export default Route.extend({
  model () {
    return RSVP.hash({
      bows: this.get('store').findAll('bow'),
      wishes: this.get('store').findAll('wish')
    })
  },
  notifications: service('toast'),
  actions: {
    addToCart (addBow) {
      const addNewBow = this.get('store').createRecord('bows-cart', { bow: addBow })
      addNewBow.save()
      const notifications = this.get('notifications')
      notifications.success('Your Beaux-Tie\'s been added!', 'Added to Cart', {positionClass: 'toast-bottom-right'})
    },
    addToWish (bowToAdd) {
      // console.log('bowToAdd is', bowToAdd)
      const newWish = this.get('store').createRecord('wish', {
        bow: bowToAdd,
        active: true
      })
      newWish.save()
      const notifications = this.get('notifications')
      notifications.success('Your Beaux-Tie\'s been added!', 'Added to Wishlist', {positionClass: 'toast-bottom-right'})
    }
  }
})
