import DS from 'ember-data'

export default DS.Model.extend({
  name: DS.attr('string'),
  style: DS.attr('string'),
  color: DS.attr('string'),
  fabric: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('number'),
  stockQuantity: DS.attr('number'),
  image: DS.attr('string'),
  carts: DS.hasMany('cart'),
  users: DS.hasMany('user')
})
