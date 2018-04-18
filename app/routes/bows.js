import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').findAll('bow')
  },

  actions: {
    addToCart (addBow) {
      const addNewBow = this.get('store').createRecord('bows-cart', { bow: addBow })
      addNewBow.save()
    }
  }
})
