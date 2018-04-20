import Route from '@ember/routing/route'

export default Route.extend({
  model (params) {
    return this.get('store').findRecord('bow', params.bow_id)
  },
  actions: {
    addToCart (addBow) {
      const addNewBow = this.get('store').createRecord('bows-cart', { bow: addBow })
      addNewBow.save()
    }
  }
})
