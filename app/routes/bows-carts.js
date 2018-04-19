import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').findAll('bows-cart')
  },
  actions: {
    removeFromCart (removeBow) {
      removeBow.destroyRecord()
    //     .then(() => {this.transitionTo('bows'))
    },
    checkout () {
      console.log('checkout clicked')
    }
  }
})
