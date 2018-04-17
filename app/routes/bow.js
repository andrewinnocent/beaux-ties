import Route from '@ember/routing/route'

export default Route.extend({
  model (params) {
    console.log('params is', params)
    return this.get('store').findRecord('bow', params.bow_id)
  }
})
