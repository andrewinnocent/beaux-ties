import Component from '@ember/component'
import { computed } from '@ember/object'

export default Component.extend({
  active: computed.alias('wish.active'),
  actions: {
    addWish () {
      console.log('clicked to active true')
      this.toggleProperty('wish.active')
      this.sendAction('addWish', this.get('wish'))
    },
    removeWish () {
      console.log('clicked to active false')
      this.toggleProperty('wish.active')
      this.sendAction('removeWish', this.get('wish'))
    }
  }
})
