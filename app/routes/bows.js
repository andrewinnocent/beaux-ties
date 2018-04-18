import { alias } from '@ember/object/computed'
import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').findAll('bow')
  },
  isAuthenticated: alias('auth.isAuthenticated')
})
