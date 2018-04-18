import Component from '@ember/component'

export default Component.extend({
  actions: {
    addToCart (bow) {
      console.log('bow id is', bow.id)
      this.sendAction('addToCart', this.get('addBow'))
    }
  }
})
