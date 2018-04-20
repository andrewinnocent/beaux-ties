import DS from 'ember-data'

export default DS.Model.extend({
  cart: DS.belongsTo('cart'),
  bow: DS.belongsTo('bow')
})
