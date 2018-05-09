import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  model () {
    return this.get('store').findAll('bows-cart')
  },
  notifications: service('toast'),
  actions: {
    removeFromCart (removeBow) {
      removeBow.destroyRecord()
        .then(() => this.refresh())
      const notifications = this.get('notifications')
      notifications.success('Go ahead and browse more Beaux-Ties!', 'Beaux-Tie Removed From Cart', {positionClass: 'toast-bottom-right'})
    },
    checkout (model) {
      console.log('In bows-cart', model.content) // an Ember array
      // for (let i = 0; i < model.content.length; i++) {
      //   model.content[i].destroyRecord() // not a function on undefined...
      // }
      // this.get('model').content.forEach(function (rec) {
      //   rec.destroyRecord()
      // })
      // this.store.unloadRecord() // clears store but not record

      const notifications = this.get('notifications')
      notifications.info('More checkout functionality to come.', 'It\'s a demo!', {positionClass: 'toast-bottom-right'})
    }
  }
})
