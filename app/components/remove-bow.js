import Component from '@ember/component'

export default Component.extend({
  actions: {
    removeFromCart () {
      this.sendAction('removeFromCart', this.get('bow'))
    }
  }
})
