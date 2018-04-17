import Route from '@ember/routing/route'

export default Route.extend({
  model (params) {
    console.log('params is', params)
    return this.get('store').findRecord('bow', params.bow_id)
  },
  actions: {
    changeQuantity (qty) {
      // should this be handled in the Cart? Easier?
    }
  }
})
