import DS from 'ember-data'

export default DS.Model.extend({
  email: DS.attr('string'),
  cart: DS.belongsTo('cart'),
  bows: DS.hasMany('bow'),
  wishes: DS.hasMany('wish')
})
