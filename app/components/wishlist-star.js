import Component from '@ember/component'
import { computed } from '@ember/object'

export default Component.extend({
  active: computed.alias('wish.active'),
  actions: {
    addToWish () {
      // console.log('add to wish', this.get('wish'))
      // console.log('add to wish.active', this.get('wish.active'))
      if (this.get('wish.active') === undefined) {
        this.sendAction('addToWish', this.get('bow'))
        this.toggleProperty('wish.active')
        this.get('wish.content').save()
      } else {
        this.toggleProperty('wish.active')
        this.get('wish.content').save()
      }
    },
    removeFromWish () {
      this.toggleProperty('wish.active')
    }
  }
})
