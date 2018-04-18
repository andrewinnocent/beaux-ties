import EmberRouter from '@ember/routing/router'
import config from './config/environment'

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function () {
  this.route('sign-up')
  this.route('sign-in')
  this.route('change-password')
  this.route('users')
  this.route('bows', {path: '/'})
  this.route('bow', {path: '/beauxties/:bow_id'})
  this.route('bows_carts', {path: 'cart'})
})

export default Router
