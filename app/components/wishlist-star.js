import Component from '@ember/component'
import { computed } from '@ember/object'

export default Component.extend({
  active: computed.alias('wish.active'),
  actions: {
    addToWish () {
      console.log('add to wish', this.get('wish'))
      console.log('add to wish.active', this.get('wish.active'))
      // if statement for record created already to skip sendAction?
      if (this.get('wish.active') === undefined) {
        this.sendAction('addToWish', this.get('bow'))
      } else {
        this.toggleProperty('wish.active')
        console.log('wish is', this.get('wish.content'))
        this.get('wish.content').save()
      }
    },
    removeFromWish () {
      console.log('clicked to active false')
      // this.sendAction('removeFromWish', this.get('wish'))
      this.toggleProperty('wish.active')
    }
  }
})
