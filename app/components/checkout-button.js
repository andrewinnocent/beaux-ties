import Component from '@ember/component'

export default Component.extend({
  actions: {
    checkout () {
      this.sendAction('checkout')
    }
  }
})
