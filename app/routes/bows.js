import Route from '@ember/routing/route'
import RSVP from 'rsvp'

export default Route.extend({
  model () {
    return RSVP.hash({
      bows: this.get('store').findAll('bow'),
      wishes: this.get('store').findAll('wish')
    })
  },

  actions: {
    addToCart (addBow) {
      const addNewBow = this.get('store').createRecord('bows-cart', { bow: addBow })
      addNewBow.save()
    },
    addToWish (bowToAdd) {
      console.log('addWish is', bowToAdd)
      const newWish = this.get('store').createRecord('wish', { bow: bowToAdd })
      newWish.save()
    }
  }
})
