import Route from '@ember/routing/route'
import RSVP from 'rsvp'
import { inject as service } from '@ember/service'
import { alias } from '@ember/object/computed'

export default Route.extend({
  auth: service(),
  // console.log('auth is', auth)
  isAuthenticated: alias('auth.isAuthenticated'),
  model () {
    // if !authenticated return /bow
    // console.log('auth.isAuthenticated is', this.get('auth.isAuthenticated'))
    if (this.get('isAuthenticated') === false) {
      return RSVP.hash({
        bows: this.get('store').findAll('bow')
      })
    } else {
      // else return /bows & /wishes
      return RSVP.hash({
        bows: this.get('store').findAll('bow'), // this is `/`
        wishes: this.get('store').findAll('wish')
      })
    }
  },
  notifications: service('toast'),
  actions: {
    addToCart (addBow) {
      const addNewBow = this.get('store').createRecord('bows-cart', { bow: addBow })
      addNewBow.save()
      const notifications = this.get('notifications')
      notifications.success('Your Beaux-Tie\'s been added!', 'Added to Cart', {positionClass: 'toast-bottom-right'})
    },
    addToggleWish (bowToAddToggle) {
      // console.log('bowToAdd is', bowToAdd)
      const wish = this.get('store').createRecord('wish', {
        bow: bowToAddToggle
      })
      wish.save()
      .then((wish) => {
        wish.toggleProperty('active')
        return wish
      })
      .then((wish) => wish.save())

      const notifications = this.get('notifications')
      notifications.success('Your Beaux-Tie\'s been added!', 'Added to Wishlist', {positionClass: 'toast-bottom-right'})
    }
  }
})
