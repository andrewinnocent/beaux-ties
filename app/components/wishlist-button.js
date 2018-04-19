import Component from '@ember/component'

export default Component.extend({
  actions: {
    addWish () {
      this.sendAction('addWish', this.get('bow'))
    }
  }
})
