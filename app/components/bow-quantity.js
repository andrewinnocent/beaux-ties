import Component from '@ember/component'

export default Component.extend({
  actions: {
    changeQuantity () {
      this.sendAction('changeQuantity', this.get('bow'))
    }
  }
})
