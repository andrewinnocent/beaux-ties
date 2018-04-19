import { alias } from '@ember/object/computed'
import Component from '@ember/component'
import { inject as service } from '@ember/service'

export default Component.extend({
  auth: service(),
  user: alias('auth.credentials.email'),
  isAuthenticated: alias('auth.isAuthenticated'),
  actions: {
    addToCart () {
      this.sendAction('addToCart', this.get('bow'))
    },
    addToWish (wish) {
      this.sendAction('addToWish', wish)
    }
  }
})
