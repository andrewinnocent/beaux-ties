import DS from 'ember-data'

export default DS.Model.extend({
  cartId: DS.belongsTo('cart'),
  bowId: DS.belongsTo('bow')
})
