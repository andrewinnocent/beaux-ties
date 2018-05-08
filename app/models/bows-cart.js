import DS from 'ember-data'
// import { computed } from '@ember/object'

export default DS.Model.extend({
  cart: DS.belongsTo('cart'),
  bow: DS.belongsTo('bow'),
  total: DS.attr('number')
})
