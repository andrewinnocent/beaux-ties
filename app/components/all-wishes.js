import Component from '@ember/component'

export default Component.extend({
  actions: {
    toggleWish () {
      this.sendAction('toggleWish', this.get('bow'))
    }
  }
})
