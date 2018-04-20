import Component from '@ember/component'

export default Component.extend({
  actions: {
    addToCart () {
      this.sendAction('addToCart', this.get('bow'))
    }
  }
})
