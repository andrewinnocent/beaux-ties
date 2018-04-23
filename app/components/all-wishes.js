import Component from '@ember/component'

export default Component.extend({
  actions: {
    addToWish () {
      this.sendAction('addToWish', this.get('bow'))
    }
  }
})
